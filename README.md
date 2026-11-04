# Prasanth M Portfolio

Premium personal portfolio for Prasanth M, built with Next.js, TypeScript, Tailwind CSS and Motion.

## DesignLens integration

DesignLens (the flagship product) is a **separate deployment** with its own repository, database and
pipeline. The portfolio never imports its source, proxies it, or frames it — it only links out.

Configure the destination with a single environment variable:

```bash
# .env.local
NEXT_PUBLIC_DESIGNLENS_URL=https://designlens-fyaf.onrender.com
```

| Situation | Behaviour |
| --- | --- |
| Variable set to a valid http(s) URL | "Explore Live Audit" and the "UX Audit Lab" nav link open it in a new tab |
| Variable missing in development | Falls back to `http://localhost:8080` and shows a small configuration note |
| Variable missing in production | No link is rendered; the CTA explains that the live product is not configured |
| Variable set to something invalid | Treated as missing — never silently linked |

Resolution lives in `lib/designlens.ts` so no component hardcodes a production URL. If the audit app is
temporarily down, the portfolio is unaffected: links simply fail to resolve for the visitor.

### Featured project and case study

- Home page: `<FeaturedDesignLens />` sits between the overview and the Selected Work grid.
- Case study: `/work/designlens-ux-audit-platform` (dedicated layout, not the generic Behance shell).
- Project data: `app/data/designlens.ts`, typed against `Project` with `projectType: "flagship"`.
- Screenshots: `public/designlens/*.png`, captured from the running application.

### Refreshing the screenshots

Screenshots are real captures of the product, never mockups. To regenerate them, run the DesignLens app
and use its capture scripts, then copy the output into `public/designlens/`:

```bash
# inside the DesignLens repository
node script/shots.mjs http://127.0.0.1:8080 ./public/shots        # dashboard, report, findings
node script/shots-real.mjs http://127.0.0.1:8080 https://example.com ./public/shots   # a live audit
```

Keep the same filenames (`dashboard.png`, `checks.png`, `evidence.png`, `report.png`, `findings.png`,
`audit-overview.png`) so no component needs changing.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
