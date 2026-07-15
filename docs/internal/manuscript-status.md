# Manuscript Status

ใช้ติดตามสถานะต้นฉบับและหลักฐานของแต่ละบท ตารางนี้ต้องใช้เลขและชื่อบทเดียวกับ `book-plan.md`

## Current Status

- Stage: Template 1.0.0 release candidate
- Last updated: 2026-07-15
- Release target: Versioned reusable project template
- Main blocker: Remote branch-protection, release and Pages checks require a pushed commit and tag

## Chapter Status

| Chapter | Title | Status | Example synced | Verification |
| ------: | ----- | ------ | -------------- | ------------ |

ค่าที่ใช้ใน Status: `Not started`, `Draft`, `Needs review`, `Ready`, `Released`

## Open Work

| Priority | Work | Exit condition | Owner |
| -------- | ---- | -------------- | ----- |
|          |      |                |       |

## Release Notes Draft

- Added a versioned, conflict-aware update lifecycle for generated books.
- Added cross-browser, accessibility, performance and security quality gates.
- Added governed content metadata, shared reader architecture and tag-driven release artifacts.

## Status Rules

- `Ready` ต้องมีเนื้อหาครบ ตัวอย่างตรงกับบท และมีผลตรวจที่บันทึกไว้
- `Released` ใช้เมื่อบทถูกเผยแพร่จาก commit/release ที่ระบุได้
- ห้ามใช้ `Example synced: Yes` หากไม่ได้ build/test สถานะตัวอย่างของบทนั้น
