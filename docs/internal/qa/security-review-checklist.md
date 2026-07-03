# Security Review Checklist

ใช้ checklist นี้ก่อนเผยแพร่ตัวอย่างหรือบทที่เกี่ยวกับ auth, secrets, deployment หรือ database

- [ ] ไม่มี secret จริงใน repository
- [ ] `.env` ถูก ignore และมีตัวอย่าง `.env.example` ถ้าจำเป็น
- [ ] password hashing ถูกอธิบายว่าใช้เพื่ออะไร
- [ ] token/session storage มีข้อจำกัดชัดเจน
- [ ] CORS policy ไม่สอนให้เปิดกว้างโดยไม่อธิบาย
- [ ] validation และ error handling ไม่เปิดเผยข้อมูลเกินจำเป็น
- [ ] logging ไม่พิมพ์ sensitive data
- [ ] Docker/deploy config ไม่ฝัง credential จริง
- [ ] dependency warning ถูกบันทึกใน `validation-report.md`
