# API Contract

ใช้ไฟล์นี้บันทึก contract ที่บทเรียน ตัวอย่าง หรือ frontend ต้องพึ่งพา ถ้าหนังสือเล่มนี้ไม่ได้ใช้ API ให้เขียน `Not applicable` พร้อมเหตุผล

## Base URL

```text
http://localhost:<port>
```

## Authentication

- Auth type:
- Token/session location:
- Public endpoints:
- Protected endpoints:

## Error Shape

```json
{
  "message": "Describe the error",
  "errors": {}
}
```

## Endpoints

| Method | Path | Purpose | Auth | Chapter |
| --- | --- | --- | --- | --- |
| GET | `/health` | Health check | No | |

## DTOs

บันทึก request/response shape ที่ใช้ซ้ำระหว่างบท:

```json
{}
```

## Compatibility Notes

- Breaking changes:
- Version assumptions:
- Backend/frontend dependencies:
