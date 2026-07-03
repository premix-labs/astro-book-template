# 0003 Auth And Security Model

## Status

Proposed

## Context

ถ้าหนังสือมี auth หรือข้อมูลผู้ใช้ ต้องกำหนด security model ให้ชัดตั้งแต่เอกสารวางแผน

## Decision

- Auth approach:
- Token/session storage:
- Password handling:
- Role model:
- Demo-only limitations:

## Consequences

- บทเรียนต้องแยก local demo กับ production ให้ชัด
- security checklist ต้องตรวจตาม model นี้
- breaking changes ต้องอัปเดต `api-contract.md`
