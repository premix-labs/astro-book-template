# Style Guide

มาตรฐานนี้ควบคุมภาษา โครงบท ตัวอย่าง และหลักฐานให้สม่ำเสมอทั้งเล่ม

## Language

- เขียนให้ผู้อ่านตามได้โดยไม่ต้องเดา prerequisite หรือไฟล์ที่ต้องแก้
- อธิบายปัญหาและเหตุผลก่อนแนะนำ syntax, package, annotation หรือ configuration ใหม่
- ใช้ประโยคตรง กระชับ และนิยามศัพท์เมื่อปรากฏครั้งแรก
- แยกให้ชัดว่าอะไรเป็น demo, local development, production practice และ deliberate simplification
- หลีกเลี่ยงคำว่า "ง่าย", "แค่", "แน่นอน" และ "latest" เมื่อไม่มีเงื่อนไขหรือหลักฐาน
- ใช้ชื่อเทคนิคตาม official documentation และคงรูปแบบเดียวกันทั้งเล่ม

## Chapter Shape

บทลงมือทำต้องมีตามลำดับ:

1. ผลลัพธ์ที่ผู้อ่านจะทำได้
2. prerequisites และสถานะเริ่มต้น
3. concept ใหม่พร้อมเหตุผล
4. ไฟล์ที่จะสร้างหรือแก้
5. ขั้นตอนเล็กที่มีตำแหน่ง code ชัดเจน
6. command สำหรับ run/test/build
7. expected result ที่สังเกตได้
8. ปัญหาที่พบบ่อยและวิธีวินิจฉัย
9. checkpoint ก่อนบทถัดไป

บทแนวคิดหรือ reference อาจปรับลำดับได้ แต่ต้องมี outcome และวิธีตรวจความเข้าใจ

## Code And Commands

- ระบุ path และตำแหน่งก่อน code block ที่ไม่ชัดเจน
- แสดงเฉพาะส่วนที่ต้องเปลี่ยน เว้นแต่ทั้งไฟล์จำเป็นต่อความเข้าใจ
- อธิบายบรรทัดสำคัญหลัง code ไม่บังคับให้ผู้อ่านถอดความเอง
- ใช้ PowerShell และ Bash เมื่อ syntax ต่างกัน
- ห้ามฝัง secret หรือ credential จริง ใช้ placeholder ที่บอกความหมาย
- ทุก command ต้องถูกทดสอบจาก working directory ที่บทระบุ
- ตัวอย่างต้อง format, build และ test ตามมาตรฐานของ stack นั้น

## Naming And Versions

- project, route, DTO, port policy และ filename ต้องตรงกับ implementation
- ใช้เลขเวอร์ชันที่ตรวจสอบได้ และบันทึกวันที่/แหล่งอ้างอิงใน `book-plan.md`
- เมื่อ rename ต้องอัปเดตบท examples contracts README และ validation report พร้อมกัน

## Frontmatter

- `title`: ไม่ซ้ำและอธิบายหัวข้อจริง
- `description`: หนึ่งประโยคที่บอก learner outcome
- `chapter`: จำนวนเต็มต่อเนื่อง เริ่ม introduction ที่ 0
- `part`: ใช้ชื่อเดียวกันทุกบทในภาคเดียวกัน
- `draft`: ใช้ซ่อนบทที่ยังไม่พร้อม ห้ามใช้แทน status tracking

รัน `npm run check:book` หลังเพิ่ม ย้าย หรือเปลี่ยนเลขบท
