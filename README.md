# AURA Genesis Command Center™

Vercel-ready Next.js product scaffold with no login screen yet.

## What this is
A full KPI command center shell for SentientOS™ / AURA™ covering:
- Founder Control Tower
- Finance Command Center
- Sales Command Center
- Marketing Command Center
- Operations Command Center
- People / HR Command Center
- AURA Agent Orchestration
- MIND | BODY | SPIRIT Triangulation™
- Pipeline map
- Command console placeholder

## Important
Authentication is intentionally not included in this version. Add login/auth after product structure is approved.

## Deploy
Upload repository to GitHub and connect Vercel. The `package.json` is at the root and includes Next.js, so Vercel will detect the app.

```bash
npm install
npm run dev
npm run build
```

## Next Build Steps
1. Connect Supabase tables for KPI data.
2. Add live GHL pipeline sync.
3. Add finance data ingestion.
4. Add task and approval engine.
5. Add AURA command logging.
6. Add Supabase Auth and middleware at final gate.
