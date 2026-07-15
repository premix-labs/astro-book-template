# Security Review Checklist

Apply this checklist to the site, code examples, authentication, databases, deployment, and configuration. Record a reason for every N/A item.

- [ ] No real secrets, tokens, passwords, private keys, or connection strings exist in published repository history.
- [ ] `.env` and local user files are ignored; provide `.env.example` when readers must configure values.
- [ ] Dependency audits pass or have a documented risk acceptance.
- [ ] Dependabot, dependency review, and CodeQL have no unresolved high-risk findings.
- [ ] GitHub Actions use full commit SHAs, and revisions are reviewed when Dependabot opens a pull request.
- [ ] External scripts and assets come from trusted sources and are restricted where practical.
- [ ] Code examples validate input and do not expose internal errors or sensitive data.
- [ ] Password hashing, token or session storage, and authorization use suitable platform libraries.
- [ ] CORS, cookies, CSRF, and security headers match the documented architecture.
- [ ] Logs do not record credentials, tokens, or unnecessary personal data.
- [ ] Production guidance applies least privilege to database users, containers, and processes.
- [ ] Deployment examples do not embed credentials and distinguish development defaults from production.
- [ ] Destructive commands include warnings, scope, and recovery or backup guidance.
- [ ] Security claims include a source and verification date.
