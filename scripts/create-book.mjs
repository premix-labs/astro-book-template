#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { cpSync, existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templateRoot = join(__dirname, '..');

function parseOptions(args) {
  const options = {};
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (!argument.startsWith('--')) throw new Error(`Unexpected argument: ${argument}`);
    const key = argument.slice(2);
    const value = args[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`${argument} requires a value.`);
    options[key] = value;
    index += 1;
  }
  return options;
}

function assertPackageName(value) {
  if (!/^[a-z0-9][a-z0-9._-]*$/.test(value)) {
    throw new Error('--slug must be a lowercase npm-compatible name using a-z, 0-9, dot, underscore or hyphen.');
  }
}

function quoteTypeScript(value) {
  const singleQuotes = value.match(/'/g)?.length ?? 0;
  const doubleQuotes = value.match(/"/g)?.length ?? 0;
  if (singleQuotes > doubleQuotes) return JSON.stringify(value);

  const jsonBody = JSON.stringify(value)
    .slice(1, -1)
    .replace(/\\(?=")/g, '')
    .replaceAll("'", "\\'");
  return `'${jsonBody}'`;
}

function renderSiteConfig({ title, description, lang }) {
  return `import type { SiteConfig } from './types/site-config';

export const siteConfig = {
  title: ${quoteTypeScript(title)},
  shortTitle: ${quoteTypeScript(title)},
  tagline: 'Technical learning path',
  description: ${quoteTypeScript(description)},
  lang: ${quoteTypeScript(lang)},
  ogImage: '',
  defaultTheme: 'light',
  github: '',
  statusLabel: 'In development',
  lastReviewed: '',

  footer: {
    text: ${quoteTypeScript(title)},
  },
} satisfies SiteConfig;
`;
}

function renderIntroduction({ description, lang }) {
  const verifiedDate = new Date().toISOString().slice(0, 10);
  if (lang.toLowerCase().startsWith('th')) {
    return `---
title: เริ่มต้นหนังสือ
description: ${JSON.stringify(description)}
chapter: 0
icon: book-open
tags: [introduction]
difficulty: beginner
prerequisites: []
learningOutcomes: ["อธิบายขอบเขต กลุ่มผู้อ่าน และวิธีใช้หนังสือเล่มนี้ได้"]
testedWith: ["Author review"]
lastVerified: ${verifiedDate}
status: draft
---

บทนำนี้เป็นโครงเริ่มต้นสำหรับผู้เขียน โปรดแทนที่ด้วยกลุ่มผู้อ่าน สิ่งที่ต้องรู้ก่อนเริ่ม ผลลัพธ์ปลายทาง และวิธีใช้หนังสือ

<Callout type="tip" title="ก่อนเขียนบทแรก">
  กำหนดขอบเขตและลำดับบทใน <code>docs/internal/book-plan.md</code> ก่อน แล้วบันทึกหลักฐานตรวจใน <code>docs/internal/validation-report.md</code>
</Callout>
`;
  }

  return `---
title: Introduction
description: ${JSON.stringify(description)}
chapter: 0
icon: book-open
tags: [introduction]
difficulty: beginner
prerequisites: []
learningOutcomes: ["Explain the scope, audience and intended use of this book."]
testedWith: ["Author review"]
lastVerified: ${verifiedDate}
status: draft
---

This is an authoring placeholder. Replace it with the target audience, prerequisites, final outcome, and instructions for using the book.

<Callout type="tip" title="Before chapter one">
  Define the scope and sequence in <code>docs/internal/book-plan.md</code>, then record validation evidence in <code>docs/internal/validation-report.md</code>.
</Callout>
`;
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function writeTemplateMetadata(targetRoot, sourceRoot) {
  const manifest = JSON.parse(readFileSync(join(sourceRoot, '.template-manifest.json'), 'utf8'));
  const managedFiles = Object.fromEntries(
    manifest.managedFiles.map((file) => {
      const target = join(targetRoot, file);
      if (!existsSync(target)) throw new Error(`Managed template file was not copied: ${file}`);
      return [file, sha256(target)];
    })
  );
  const metadata = {
    $schema: './schemas/book-template.schema.json',
    schemaVersion: manifest.schemaVersion,
    templateVersion: manifest.templateVersion,
    templateRepository: 'https://github.com/premix-labs/astro-book-template',
    generatedAt: new Date().toISOString().slice(0, 10),
    managedFiles,
  };
  writeFileSync(join(targetRoot, '.book-template.json'), `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
}

function renderReadme({ title, description }) {
  return `# ${title}

${description}

## Development

Requires a Node.js version allowed by \`package.json\`.

| Command                          | Purpose                                                              |
| -------------------------------- | -------------------------------------------------------------------- |
| \`npm install\`                    | Install dependencies and create the local workspace                  |
| \`npm run dev\`                    | Start Astro and use the URL printed in the terminal                  |
| \`npm run verify\`                 | Run lint, type checks, tests, book validation, build and link checks |
| \`npm run verify:enterprise\`      | Add Chromium, accessibility, performance and dependency gates        |
| \`npm run build\`                  | Build the static site and Pagefind index                             |
| \`npm run preview\`                | Preview the production output locally                                |
| \`npm run new-chapter -- "Title"\` | Create the next chapter scaffold                                     |
| \`npm run template:status\`        | Show installed template version and managed-file drift               |

## Authoring Standard

Read \`AGENTS.md\` and \`docs/internal/README.md\` before writing chapters. Plan the curriculum in \`docs/internal/book-plan.md\`, keep examples synchronized, and update \`docs/internal/validation-report.md\` with real evidence.
`;
}

function resetPlanningDocs(targetRoot, { title, slug, lang }) {
  const planPath = join(targetRoot, 'docs', 'internal', 'book-plan.md');
  const plan = readFileSync(planPath, 'utf8')
    .replace('- Working title:', `- Working title: ${title}`)
    .replace('- Repository name:', `- Repository name: ${slug}`)
    .replace('- Content language:', `- Content language: ${lang}`);
  writeFileSync(planPath, plan, 'utf8');

  writeFileSync(
    join(targetRoot, 'docs', 'internal', 'manuscript-status.md'),
    `# Manuscript Status

## Current Status

- Stage: Planning
- Last updated:
- Release target:
- Main blocker: curriculum and examples are not defined yet

## Chapter Status

| Chapter | Title | Status | Example synced | Verification |
| ------: | ----- | ------ | -------------- | ------------ |

Status values: \`Not started\`, \`Draft\`, \`Needs review\`, \`Ready\`, \`Released\`

## Open Work

| Priority | Work                                           | Exit Condition                    |
| -------- | ---------------------------------------------- | --------------------------------- |
| High     | complete book plan and final-project decisions | scope and sequence are reviewable |
`,
    'utf8'
  );

  writeFileSync(
    join(targetRoot, 'docs', 'internal', 'validation-report.md'),
    `# Validation Report

## Summary

- Status: New book scaffold; curriculum and examples are not validated
- Last validated:
- Validator:
- Main risk: planning documents still contain placeholders

## Commands

| Command          | Result  | Notes                                             |
| ---------------- | ------- | ------------------------------------------------- |
| \`npm run verify\` | Not run | Run after \`npm install\` and initial customization |

## Findings

| Severity | Finding                                      | Location        | Status |
| -------- | -------------------------------------------- | --------------- | ------ |
| High     | curriculum and final project are not defined | \`docs/internal\` | Open   |

## Next Validation

1. complete the book plan, contracts and decisions
2. replace the introduction placeholder
3. run \`npm run verify\`
`,
    'utf8'
  );
}

export function createBook({ sourceRoot = templateRoot, target, title, slug, description, lang = 'en' }) {
  if (!title) throw new Error('--title is required.');
  if (!slug) throw new Error('--slug is required.');
  assertPackageName(slug);

  const targetRoot = resolve(target ?? join(dirname(sourceRoot), slug));
  if (targetRoot === resolve(sourceRoot)) throw new Error('Target must not be the template directory.');
  if (existsSync(targetRoot)) throw new Error(`Target already exists: ${targetRoot}`);

  const excludedRoots = new Set(['.astro', '.git', 'dist', 'node_modules']);
  cpSync(sourceRoot, targetRoot, {
    recursive: true,
    filter(source) {
      const path = relative(sourceRoot, source);
      if (!path) return true;
      return !excludedRoots.has(path.split(sep)[0]);
    },
  });

  const finalDescription = description ?? `A practical, step-by-step guide to ${title}.`;
  const packagePath = join(targetRoot, 'package.json');
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
  packageJson.name = slug;
  packageJson.description = finalDescription;
  writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`, 'utf8');

  const lockPath = join(targetRoot, 'package-lock.json');
  if (existsSync(lockPath)) {
    const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
    lock.name = slug;
    if (lock.packages?.['']) lock.packages[''].name = slug;
    writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`, 'utf8');
  }

  writeFileSync(
    join(targetRoot, 'src', 'site.config.ts'),
    renderSiteConfig({ title, description: finalDescription, lang }),
    'utf8'
  );
  writeFileSync(join(targetRoot, 'README.md'), renderReadme({ title, description: finalDescription }), 'utf8');

  const chaptersDir = join(targetRoot, 'src', 'content', 'chapters');
  for (const file of readdirSync(chaptersDir)) {
    if (file.endsWith('.mdx')) rmSync(join(chaptersDir, file));
  }
  writeFileSync(
    join(chaptersDir, 'intro.mdx'),
    renderIntroduction({ title, description: finalDescription, lang }),
    'utf8'
  );
  resetPlanningDocs(targetRoot, { title, slug, lang });
  writeTemplateMetadata(targetRoot, sourceRoot);

  return targetRoot;
}

async function main() {
  const options = parseOptions(process.argv.slice(2));
  const targetRoot = createBook({
    target: options.target,
    title: options.title,
    slug: options.slug,
    description: options.description,
    lang: options.lang ?? 'en',
  });
  console.log(`Created ${targetRoot}`);
  console.log(`Next: cd ${JSON.stringify(targetRoot)} && npm install && npm run verify`);
}

const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
