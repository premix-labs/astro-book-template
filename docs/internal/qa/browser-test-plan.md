# Browser Test Plan

ใช้ production preview หรือ deployed URL ที่มี base path จริง ห้ามสมมติว่า dev server ใช้ port คงที่

## Test Matrix

| Project          | Viewport          | Automated gate     | Manual release check |
| ---------------- | ----------------- | ------------------ | -------------------- |
| Chromium desktop | 1440 x 900        | `npm run test:e2e` | visual hierarchy     |
| Chromium tablet  | 768 x 1024        | `npm run test:e2e` | touch and wrapping   |
| Chromium mobile  | Pixel 5 emulation | `npm run test:e2e` | real-device smoke    |
| Firefox desktop  | 1440 x 900        | `npm run test:e2e` | font rendering       |
| WebKit desktop   | 1440 x 900        | `npm run test:e2e` | Safari smoke         |

## Core Flows

1. เปิดหน้าแรกและไป introduction/บทแรก
2. เปิด sidebar หรือ mobile menu และไปบทสุดท้าย
3. เปิด search ค้นคำที่อยู่ในบท และเปิดผลลัพธ์
4. สลับ light/dark theme แล้ว reload หน้า
5. ใช้ previous/next navigation
6. เปิด direct URL ภายใต้ repository base path และ refresh
7. ทดสอบ 404 page ด้วย URL ที่ไม่มีอยู่

## Visual And Runtime Checks

- [ ] ไม่มีข้อความ controls หรือ navigation ซ้อนกัน
- [ ] code blocks และ tables ใช้งานได้บน mobile
- [ ] Mermaid diagrams และ figures render เมื่อมี
- [ ] search index โหลดจาก production build
- [ ] ไม่มี broken asset หรือ failed network request
- [ ] ไม่มี unexpected console error/warning
- [ ] keyboard flow ผ่านตาม accessibility checklist

## Release Evidence

- Tested URL/commit:
- Date:
- Tester:
- Automated report or workflow URL:
- Manual screenshots/logs:
- Remaining issues:

Generated books must replace these fields. Passing evidence from the template does not transfer to a new repository.
