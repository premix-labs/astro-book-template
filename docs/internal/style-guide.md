# Style Guide

ใช้ไฟล์นี้ควบคุมภาษา รูปแบบบทเรียน และ code examples ให้สม่ำเสมอทั้งเล่ม

## Language

- เขียนให้มือใหม่ทำตามได้โดยไม่ต้องเดา
- อธิบายเหตุผลก่อนสั่งให้ใช้ concept ใหม่
- ใช้ประโยคตรง สั้น และตรวจได้
- แยกคำว่า demo, local development และ production ให้ชัดเจน

## Chapter Shape

บทลงมือทำควรมี:

1. บทนี้จะทำอะไร
2. ก่อนเริ่มบทนี้
3. สิ่งที่จะใช้ในบทนี้
4. หลังจบบทนี้ ไฟล์ที่เปลี่ยน
5. ขั้นตอนลงมือทำ
6. ทดสอบ
7. ผลลัพธ์ที่ควรเห็น
8. ปัญหาที่พบบ่อย
9. Checkpoint

## Code Blocks

- แตกโค้ดเป็น block เล็ก
- บอกชื่อไฟล์ก่อน code block
- บอกตำแหน่งที่ต้องเพิ่มหรือแก้
- หลีกเลี่ยงการแปะทั้งไฟล์ถ้าไม่จำเป็น
- ถ้าคำสั่งต่างกันตาม OS ให้มีทั้ง Windows PowerShell และ macOS/Linux Bash

## Naming

- ใช้ชื่อ project, route, port และ filename ให้ตรงกับ example project จริง
- ถ้า rename สิ่งใด ต้องอัปเดต README, examples และ validation report พร้อมกัน
