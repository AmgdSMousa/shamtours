---
agent_auth:
  register_uri: https://shamtours.am8ed.site/auth.md
  supported_identity_types:
    - agent
    - user
  credential_types:
    - bearer_token
    - none
  claim_uri: https://shamtours.am8ed.site/auth.md#agent-registration
  revocation_uri: https://shamtours.am8ed.site/auth.md#revocation
---

# Auth.md

> Agent Authentication & Registration Specification for shamtours.am8ed.site

```json agent_auth
{
  "register_uri": "https://shamtours.am8ed.site/auth.md",
  "supported_identity_types": ["agent", "user"],
  "credential_types": ["bearer_token", "none"],
  "claim_uri": "https://shamtours.am8ed.site/auth.md#agent-registration",
  "revocation_uri": "https://shamtours.am8ed.site/auth.md#revocation"
}
```

## Agent Registration

This site provides open, unauthenticated public read access (`GET`) for all AI agents to inspect Sham Tours travel packages, Umrah schedules, and trip planning services. No prior registration or API key is required for public discovery endpoints.

### Supported Identity Types
- `agent`: AI Agents, LLM crawlers, and automated assistants.
- `user`: Human users browsing via web interfaces.

### Credential Types
- `none`: Unauthenticated public read access.
- `bearer_token`: Bearer tokens for OAuth 2.0 endpoints.

## Authentication & Discovery Endpoints

| Endpoint | Type | Auth Required | Description |
| --- | --- | --- | --- |
| `https://shamtours.am8ed.site/llms.txt` | LLM Summary | None | Lightweight LLM markdown summary |
| `https://shamtours.am8ed.site/llms-full.txt` | LLM Full Spec | None | Full Sham Tours documentation |
| `https://shamtours.am8ed.site/.well-known/mcp.json` | MCP Server | None | Model Context Protocol descriptor |
| `https://shamtours.am8ed.site/.well-known/api-catalog.json` | API Catalog | None | RFC 9727 API Linkset Catalog |

## Dynamic Registration Procedure

To register an agent or request client credentials:
1. Contact: amgedsayed2001@gmail.com
2. Registration URI: `https://shamtours.am8ed.site/auth.md`

## Revocation

For token revocation or agent de-registration, submit requests to amgedsayed2001@gmail.com.
