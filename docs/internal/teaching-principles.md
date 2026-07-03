# Teaching Principles

หนังสือสอนเขียนโปรแกรมที่ดีต้องทำให้ผู้เรียนสร้างของที่รันได้จริง และเข้าใจเหตุผลของแต่ละขั้น ไม่ใช่พิมพ์ตามโดยไม่รู้ว่ากำลังแก้อะไร

## Definition Of Done

บทหนึ่งจะถือว่าพร้อมสอนเมื่อผ่านทุกข้อ:

- มีเป้าหมายบทที่ชัดเจน
- บอก prerequisites ก่อนเริ่ม
- บอกไฟล์ที่จะเปลี่ยนหลังจบบท
- อธิบาย concept ใหม่ก่อนใช้
- ถ้าสร้าง folder หรือ file ต้องมีคำสั่งที่ copy ได้
- โค้ดถูกแบ่งเป็นขั้น
- มีคำสั่ง run, test หรือ build สำหรับตรวจผล
- มี expected result
- มี common errors หรือคำแนะนำเมื่อผลไม่ตรง
- มี checkpoint ก่อนอ่านบทต่อไป
- เนื้อหาตรงกับ example project ณ จุดนั้นของหนังสือ

## Teaching Method

สอนโค้ดเป็นชั้น:

1. สร้าง folder
2. สร้าง file
3. เพิ่ม import หรือ using
4. เพิ่ม class, function, component หรือ module
5. เพิ่ม dependency
6. เพิ่ม behavior ทีละส่วน
7. ต่อเข้ากับ route, UI, service หรือ configuration
8. ทดสอบผลลัพธ์

## Review Rubric

| หมวด | คะแนน |
| --- | ---: |
| เป้าหมายและบริบทชัด | 1 |
| อธิบาย concept ก่อนใช้ | 2 |
| ขั้นตอนละเอียดและไม่กระโดด | 2 |
| โค้ดแตกเป็นส่วนอ่านง่าย | 1 |
| คำสั่งตรวจและ expected result ชัด | 1.5 |
| common errors/checkpoint ช่วยตรวจตัวเองได้ | 1 |
| ตรงกับ example project และ build/test ได้จริง | 1.5 |
