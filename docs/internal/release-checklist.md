# Release Checklist

ใช้ checklist นี้ก่อนเผยแพร่หนังสือหรือ push งานใหญ่

## Content

- [ ] ทุกบทมีเป้าหมายชัดเจน
- [ ] ทุกบทบอก prerequisites และไฟล์ที่จะเปลี่ยน
- [ ] คำใหม่ package method annotation attribute หรือ configuration ถูกอธิบายก่อนใช้
- [ ] code block ยาวถูกแยกเป็นขั้นพร้อมคำอธิบาย
- [ ] มี expected result และ checkpoint ตรวจเองได้

## Examples

- [ ] progressive example ตรงกับบทเรียน
- [ ] final project ตรงกับ `final-project-structure.md`
- [ ] คำสั่งติดตั้ง run test build ใช้ได้จริง
- [ ] ports, routes, filenames และ project names ตรงกันทั้งเล่ม

## Quality

- [ ] `npm run build` ผ่าน
- [ ] test ของ example project ผ่านตาม scope
- [ ] ลิงก์ภายในไม่เสีย
- [ ] navigation เรียงบทถูกต้อง
- [ ] `validation-report.md` อัปเดตผลล่าสุด

## Release

- [ ] README อัปเดต
- [ ] deployment notes ถูกต้อง
- [ ] known limitations ชัดเจน
- [ ] ไม่มี secret หรือ local-only path ที่ไม่ควรเผยแพร่
