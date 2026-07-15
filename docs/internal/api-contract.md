# API Contract

Status: **Not decided**

ใช้เอกสารนี้เมื่อบทเรียน ตัวอย่าง หรือ frontend พึ่งพา API หากหนังสือไม่ใช้ API ให้เปลี่ยน Status เป็น **Not applicable** พร้อมเหตุผล และลบ section ที่ไม่เกี่ยวข้อง

## Runtime Assumptions

- API technology/version:
- Base URL discovery method:
- Development port policy:
- API versioning policy:

อย่า fix development port หาก framework เลือก port ให้เอง ให้ผู้อ่านใช้ URL ที่แสดงใน terminal หรือ configuration ของเครื่อง

## Authentication

- Authentication type:
- Credential location:
- Public endpoints:
- Protected endpoints:
- Authorization rules:

## Error Contract

```json
{
  "type": "about:blank",
  "title": "Describe the error category",
  "status": 400,
  "detail": "Describe this occurrence",
  "traceId": "correlation-value"
}
```

ปรับ shape ให้ตรง implementation จริง ห้ามคัดลอกตัวอย่างนี้ไปอ้างว่าเป็น contract โดยไม่ตรวจสอบ

## Endpoints

| Method | Path | Purpose | Auth | Request | Success response | Introduced in |
| ------ | ---- | ------- | ---- | ------- | ---------------- | ------------- |

## Shared DTOs

| Name | Direction | Fields | Validation | Introduced in |
| ---- | --------- | ------ | ---------- | ------------- |

## Compatibility Notes

- Breaking changes:
- Version assumptions:
- Backend/frontend dependencies:
- CORS requirements:
