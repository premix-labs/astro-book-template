# Security Review Checklist

ใช้กับ site, code examples, authentication, database, deployment และ configuration หากข้อใด N/A ให้บันทึกเหตุผล

- [ ] ไม่มี secret, token, password, private key หรือ connection string จริงใน repository/history ที่จะเผยแพร่
- [ ] `.env` และ local user files ถูก ignore; มี `.env.example` เมื่อผู้อ่านต้องตั้งค่า
- [ ] dependency audit ผ่านหรือมี documented risk acceptance
- [ ] Dependabot, dependency review และ CodeQL ไม่มี unresolved high-risk finding
- [ ] GitHub Actions ใช้ full commit SHA และตรวจ revision เมื่อ Dependabot เปิด pull request
- [ ] external scripts/assets มาจากแหล่งที่เชื่อถือได้และถูกจำกัดเท่าที่ทำได้
- [ ] code examples validate input และไม่เปิดเผย internal error/sensitive data
- [ ] password hashing, token/session storage และ authorization ใช้ library/platform ที่เหมาะสม
- [ ] CORS, cookies, CSRF และ security headers ถูกอธิบายตาม architecture จริง
- [ ] logs ไม่บันทึก credential, token หรือ personal data เกินจำเป็น
- [ ] database user/container/process ไม่ใช้สิทธิ์เกินจำเป็นใน production guidance
- [ ] deployment examples ไม่ฝัง credential และแยก development defaults จาก production
- [ ] destructive commands มี warning, scope และ recovery/backup guidance
- [ ] security claims มี source และวันที่ตรวจสอบ
