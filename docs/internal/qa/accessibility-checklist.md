# Accessibility Checklist

บันทึก browser, viewport, input method และผลตรวจไว้ใน `validation-report.md`

`tests/e2e/accessibility.spec.ts` enforces the automated Axe gate. The checklist below still requires human keyboard, zoom and assistive-technology review before release.

## Structure And Content

- [ ] แต่ละหน้ามี `h1` หนึ่งรายการและ heading ไม่ข้ามระดับโดยไม่มีเหตุผล
- [ ] page title และ landmark สื่อความหมาย
- [ ] link text เข้าใจปลายทางได้เมื่ออ่านแยกจากบริบท
- [ ] code, tables และ diagrams มีคำอธิบายหรือ caption ที่เพียงพอ
- [ ] รูปที่สื่อความหมายมี alt text; รูปตกแต่งใช้ alt ว่าง

## Keyboard And Focus

- [ ] ใช้งาน navigation, search, theme, tabs, copy button และ mobile menu ด้วย keyboard ได้
- [ ] focus indicator มองเห็นได้ทั้ง light/dark theme
- [ ] focus order สอดคล้องกับลำดับเนื้อหา
- [ ] modal เก็บ focus, ปิดด้วย Escape และคืน focus ให้ trigger
- [ ] ไม่มี keyboard trap ที่ไม่ได้ตั้งใจ

## Visual And Responsive

- [ ] text และ controls มี contrast ตาม WCAG 2.2 AA
- [ ] เนื้อหาใช้งานได้ที่ 200% zoom
- [ ] viewport 320 CSS px ไม่มี horizontal overflow ยกเว้น code/table container ที่ตั้งใจให้เลื่อน
- [ ] information ไม่พึ่งสีอย่างเดียว
- [ ] motion เคารพ `prefers-reduced-motion`

## Assistive Technology

- [ ] controls มี accessible name และ state
- [ ] status/error messages ถูกประกาศเมื่อจำเป็น
- [ ] automated scan ไม่มี critical/serious findings
- [ ] ตรวจ keyboard และ screen reader smoke test อย่างน้อยหนึ่งชุดก่อน release
