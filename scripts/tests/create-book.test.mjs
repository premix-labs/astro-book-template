import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createBook } from '../create-book.mjs';

const templateRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

test('createBook produces a clean localized scaffold', () => {
  const directory = mkdtempSync(join(tmpdir(), 'astro-book-create-'));
  const target = join(directory, 'thai-book');
  try {
    createBook({
      sourceRoot: templateRoot,
      target,
      title: 'หนังสือทดสอบ',
      slug: 'thai-test-book',
      description: 'หนังสือสำหรับทดสอบ template',
      lang: 'th',
    });

    const packageJson = JSON.parse(readFileSync(join(target, 'package.json'), 'utf8'));
    const templateMetadata = JSON.parse(readFileSync(join(target, '.book-template.json'), 'utf8'));
    assert.equal(packageJson.name, 'thai-test-book');
    assert.equal(templateMetadata.templateVersion, '1.0.1');
    assert.ok(Object.keys(templateMetadata.managedFiles).length > 20);
    assert.match(readFileSync(join(target, 'src', 'site.config.ts'), 'utf8'), /หนังสือทดสอบ/);
    assert.match(readFileSync(join(target, 'src', 'content', 'chapters', 'intro.mdx'), 'utf8'), /เริ่มต้นหนังสือ/);
    assert.match(
      readFileSync(join(target, 'src', 'content', 'chapters', 'intro.mdx'), 'utf8'),
      /lastVerified: \d{4}-\d{2}-\d{2}/
    );
    const plan = readFileSync(join(target, 'docs', 'internal', 'book-plan.md'), 'utf8');
    assert.match(plan, /Working title: หนังสือทดสอบ/);
    assert.match(plan, /Repository name: thai-test-book/);
    assert.match(plan, /Content language: th/);
    assert.equal(existsSync(join(target, 'node_modules')), false);
    assert.equal(existsSync(join(target, '.git')), false);
    assert.equal(existsSync(join(target, 'dist')), false);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
