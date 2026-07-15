# API Contract

Status: **Not decided**

Use this document when chapters, examples, or a frontend depend on an API. If the book does not use an API, change the status to **Not applicable**, record the reason, and remove irrelevant sections.

## Runtime Assumptions

- API technology/version:
- Base URL discovery method:
- Development port policy:
- API versioning policy:

Do not hard-code a development port when the framework selects one. Tell readers to use the URL printed in the terminal or their local configuration.

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

Replace this shape with the actual implementation. Do not present this example as the contract without verifying it.

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
