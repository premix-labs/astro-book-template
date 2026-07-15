# Release Checklist

ใช้ checklist นี้เป็น release gate ไม่ใช่รายการแนะนำ หากข้อใดไม่เกี่ยวข้องให้ทำเครื่องหมาย N/A พร้อมเหตุผลใน `validation-report.md`

## Curriculum

- [ ] กลุ่มผู้อ่าน prerequisites scope และผลลัพธ์ปลายทางตรงกับ `book-plan.md`
- [ ] ลำดับบทไม่ใช้ concept ก่อนอธิบาย
- [ ] ทุกบทมี outcome, changed files, expected result และ checkpoint ที่ตรวจได้
- [ ] ทุกคำสั่ง route port filename และ version ตรงกันทั้งเล่ม
- [ ] หัวข้อที่ตัดออกหรือเลื่อนไปเล่มอื่นถูกระบุชัดเจน

## Chapters And Examples

- [ ] ผู้อ่านทำตามบทได้โดยไม่ต้องเปิด final source เพื่อเดาขั้นตอน
- [ ] progressive example อยู่ในสถานะเดียวกับบทและไม่ใช้โค้ดจากอนาคต
- [ ] final project ตรงกับ `final-project-structure.md`
- [ ] install, run, test, build และ migration commands ทำงานใน environment ที่ประกาศ
- [ ] expected output และ common failures ตรงกับ behavior จริง
- [ ] API/DTO/auth contract ตรง implementation หรือระบุ N/A

## Site Quality

- [ ] `npm ci` ผ่านจาก clean checkout
- [ ] `npm run verify` ผ่าน
- [ ] `npm run test:e2e` ผ่าน Chromium, Firefox, WebKit และ mobile project
- [ ] `npm run test:performance` ผ่าน performance budget
- [ ] `npm run test:visual` ผ่าน reviewed desktop และ mobile snapshots
- [ ] Axe ไม่มี critical หรือ serious accessibility violation
- [ ] `npm run security:audit` ไม่มี vulnerability ระดับ moderate ขึ้นไป
- [ ] navigation, search, theme, code copy และ mobile menu ทำงาน
- [ ] internal links และ public assets ไม่เสียภายใต้ repository base path
- [ ] browser test plan ผ่าน desktop, tablet และ mobile
- [ ] accessibility checklist ผ่านและข้อจำกัดถูกบันทึก

## Security And Operations

- [ ] ไม่มี secret, credential, local-only absolute path หรือข้อมูลส่วนบุคคล
- [ ] dependency/version baseline มีวันที่และแหล่งอ้างอิงหลัก
- [ ] configuration examples ใช้ค่าปลอดภัยและอธิบาย production differences
- [ ] security review checklist ผ่านสำหรับเนื้อหาที่เกี่ยวข้อง
- [ ] GitHub Actions ใช้ full commit SHA และ Dependabot ไม่มี security update ค้าง
- [ ] CodeQL และ dependency review ผ่าน

## Release Evidence

- [ ] `manuscript-status.md` ตรงกับบทจริง
- [ ] `validation-report.md` ระบุ command, result, date, scope และ remaining risk
- [ ] README และ deployment instructions ตรงกับ repository
- [ ] known limitations และ breaking changes ชัดเจน
- [ ] `package.json`, `.template-manifest.json`, `CHANGELOG.md` และ release tag ใช้ version เดียวกัน
- [ ] release artifact และ SBOM ถูกสร้างจาก commit ที่ตรวจแล้ว
- [ ] GitHub Pages deployment ผ่านจาก commit ที่จะเผยแพร่
