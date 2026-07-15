# Teaching Principles for 10/10 Tutorial Books

## Goal

หนังสือสอนเขียนโปรแกรมที่ดีต้องทำให้ผู้เรียนสร้างของที่รันได้จริง แต่ไม่ปล่อยให้พิมพ์ตามแบบไม่เข้าใจ ทุกครั้งก่อนใช้ concept ใหม่ เช่น route, controller, component, service, repository, DTO, validation, authentication, Docker, deployment หรือ configuration ต้องตอบให้ได้ว่า:

- มันแก้ปัญหาอะไร
- ถ้าไม่มีมันจะเกิดปัญหาอะไร
- ในงานจริงใช้มันเพื่ออะไร
- ในบทนี้ใช้เฉพาะส่วนไหนก่อน
- implementation ตอนนี้ยังมีข้อจำกัดอะไร

## Definition of Done

บทต้องสอนได้ครบจากเนื้อหาในหนังสือเอง ผู้เรียนไม่ควรต้องเปิดไฟล์ใน `examples/` เพื่อรู้ว่าต้องเขียนอะไร เขียนที่ไฟล์ไหน หรือตรวจผลอย่างไร ไฟล์ example ใช้เป็น source of truth สำหรับผู้เขียนและ reviewer เพื่อตรวจว่าเนื้อหาในหนังสือถูกต้อง build/test ได้จริง และใช้เป็น optional reference หลังเรียนจบเท่านั้น

บทหนึ่งจะถือว่าพร้อมสอนเมื่อผ่านทุกข้อ:

- มีเป้าหมายบทที่ชัดเจน
- บอก prerequisites ก่อนเริ่ม
- บอกไฟล์ที่จะเปลี่ยนหลังจบบท
- อธิบายคำใหม่, method, attribute, annotation, hook, package หรือ configuration ก่อนใช้
- ถ้าสร้าง folder/file ต้องมีคำสั่งที่ copy ได้
- ถ้าคำสั่งต่างกันตาม OS ต้องมี Windows PowerShell และ macOS/Linux Bash
- โค้ดถูกแบ่งเป็นขั้น ไม่แปะไฟล์ยาวรวดเดียว
- code block ยาวไม่เกินประมาณ 30 บรรทัด เว้นแต่มีเหตุผลชัดเจน
- มีคำสั่ง run/test/build สำหรับตรวจผล
- มี expected result เช่น status code, response body, log, ไฟล์ที่ควรเห็น หรือหน้าจอที่ควรแสดง
- มี common errors หรือคำแนะนำเมื่อผลไม่ตรง
- มี checkpoint ก่อนอ่านบทต่อไป
- เนื้อหาตรงกับ progressive project ณ จุดนั้นของหนังสือ
- example/final/validation project build หรือ test ผ่านตาม scope ของบท

## Chapter Structure

บทที่มีการลงมือเขียนโค้ดควรเรียงแบบนี้:

1. บทนี้จะทำอะไร
2. ก่อนเริ่มบทนี้
3. สิ่งที่จะใช้ในบทนี้
4. หลังจบบทนี้ ไฟล์ที่เปลี่ยน
5. flow หรือ diagram ถ้าช่วยให้เข้าใจ
6. ขั้นที่ 1: สร้าง folder/file
7. ขั้นที่ 2: เพิ่ม code ส่วนเล็ก
8. ขั้นที่ 3: ต่อเข้ากับ service/config/route/UI
9. ขั้นที่ 4: ทดสอบ
10. ผลลัพธ์ที่ควรเห็น
11. ปัญหาที่พบบ่อย
12. Checkpoint

บทที่เป็น concept ล้วนไม่จำเป็นต้องมีทุกหัวข้อ แต่ยังควรมีเป้าหมาย ตัวอย่าง และ checkpoint

## Code Teaching Method

สอนโค้ดเป็นชั้น:

1. สร้าง folder
2. สร้าง file
3. เพิ่ม import หรือ using
4. เพิ่ม class, function, component, record หรือ interface
5. เพิ่ม property, field, schema หรือ type
6. เพิ่ม constructor, dependency, hook หรือ helper
7. เพิ่ม behavior ทีละส่วน
8. ต่อเข้ากับ dependency injection, configuration, route, controller, UI หรือ API client
9. ทดสอบผลลัพธ์

ห้ามให้ผู้เรียนเพิ่มโค้ดใหญ่ทั้งไฟล์โดยไม่มีจุดหยุดอธิบาย ถ้าโค้ดยาว ให้แตกเป็นหลาย block และอธิบายระหว่างทาง

## 10-Point Rubric

| หมวด                                          | คะแนน |
| --------------------------------------------- | ----: |
| เป้าหมายและบริบทชัด                           |     1 |
| อธิบาย concept/method/config ก่อนใช้          |     2 |
| ขั้นตอนลงมือทำละเอียดและไม่กระโดด             |     2 |
| โค้ดแตกเป็นส่วนอ่านง่าย                       |     1 |
| คำสั่งตรวจและ expected result ชัด             |   1.5 |
| common errors/checkpoint ช่วยตรวจตัวเองได้    |     1 |
| ตรงกับ example project และ build/test ได้จริง |   1.5 |

การตีความคะแนน:

- 10/10: ผู้เรียนใหม่ทำตามได้ เข้าใจเหตุผล และตรวจงานเองได้
- 8/10: เนื้อหาถูก แต่ยังมีบางช่วงที่ต้องเดาเอง
- 6/10: มีโค้ดและคำอธิบาย แต่ยังเหมือนให้ copy ตาม
- ต่ำกว่า 6/10: เสี่ยงทำให้ผู้เรียนหลงทางหรือเข้าใจผิด

## Review Checklist

ใช้รายการนี้ขณะตรวจทีละบท:

- บทนี้มีเป้าหมายชัดหรือไม่
- ผู้เรียนรู้ไหมว่าต้องเปิดไฟล์ไหน
- ถ้าต้องสร้าง folder/file มีคำสั่งครบหรือไม่
- มีคำสั่งทั้ง Windows และ macOS/Linux เมื่อจำเป็นหรือไม่
- มีคำใหม่ที่ยังไม่ได้อธิบายก่อนใช้หรือไม่
- มีโค้ดยาวเกินไปหรือไม่
- มีจุดที่บอกให้ลบ/แก้โค้ด แต่ไม่บอกโค้ดที่เหลือควรเป็นอย่างไรหรือไม่
- route, port, filename และ project name ตรงกับของจริงหรือไม่
- expected response/status code/screen/log ถูกต้องหรือไม่
- checkpoint ตรวจได้จริงหรือเป็นแค่ข้อความกว้าง ๆ
- มีคำเตือนเรื่อง demo vs production เมื่อใช้วิธีที่ยังไม่ปลอดภัยหรือไม่
- progressive project ทำตามบทนี้แล้ว compile/test ผ่านหรือไม่
- final project สอดคล้องกับบทนี้หรือมีเหตุผลเมื่อแตกต่างหรือไม่

## Common Failure Patterns

ถ้าเจอสิ่งเหล่านี้ ให้ถือว่าเป็นจุดที่ต้องขัดเกลา:

- แปะโค้ดยาวทั้งไฟล์โดยไม่อธิบาย
- ใช้คำว่า "เพิ่มโค้ดนี้" แต่ไม่บอกตำแหน่ง
- ใช้ class, component, hook, helper หรือ field ที่ยังไม่เคยสร้าง
- ใช้ package/library แต่ไม่บอกคำสั่งติดตั้ง
- สอน command ที่ใช้ได้เฉพาะ OS เดียวโดยไม่บอก
- response หรือ expected screen ไม่ตรงกับโค้ดจริง
- port ในหนังสือไม่ตรงกับ launch/dev settings จริง
- checkpoint ตรวจไม่ได้จริง
- warning/error ที่ผู้เรียนเจอบ่อยไม่มีคำอธิบาย
- production warning ไม่ชัด เช่น secret, CORS เปิดกว้าง, logging sensitive data, token storage

## Verification Gates

ก่อนบอกว่างานขัดเกลาเสร็จ ให้ตรวจตาม scope:

- book/docs changes: `npm run build`
- example changes: run the relevant build/test command
- Docker/Compose changes: `docker compose config`
- dependency changes: run package-manager install/build/audit where relevant
- behavior changes: update README, validation report, API contract notes, QA notes, migration notes, and expected responses

อย่าใช้คำว่า "เสร็จแล้ว" ถ้ายังไม่ได้ตรวจด้วยหลักฐานที่เหมาะกับงานนั้น
