# **App Name**: AdCreative Insights

## Core Features:

- Account Connection: Connect to Google Ads and Meta Ads accounts via OAuth to retrieve ad creative data.
- Performance Dashboard: Display key performance metrics (CTR, CPA, CPM, Spend, ROAS) for each ad creative in sortable tables and charts.
- Creative Fatigue Detection: Predict potential creative fatigue by analyzing historical performance data and flagging creatives with declining metrics. This tool analyzes the performance data and tells the user if a creative is likely experiencing fatigue.

## Style Guidelines:

- Primary color: Use a deep blue (#1A237E) for a professional and trustworthy feel.
- Secondary color: Light gray (#F5F5F5) for backgrounds and subtle contrasts.
- Accent: Teal (#00BCD4) for interactive elements and highlights to draw attention.
- Card-based layout for displaying creative performance metrics and insights.
- Use clear and consistent icons for metrics (CTR, CPA, CPM) and filters.
- Subtle transitions and animations for loading data and displaying new insights.

## Original User Request:
I'm building a SaaS dashboard similar to Atria and Motion, focused on creative analytics for social ads.

🎯 Core Goal:
Help marketers and agencies analyze performance of ad creatives across Meta Ads and Google Ads, not just campaigns or ad sets.

💡 Main Features (from Atria + Motion):
Connect Google & Meta Ad accounts via OAuth

Pull all ad creatives (images, videos, etc.)

Track per-creative performance: CTR, CPA, CPM, Spend, ROAS

Show Top Performing Creatives

Detect creative fatigue (performance drop)

Filter by platform, campaign, date, type

View insights as cards, tables, and graphs

Creative library (with preview and metrics)

Commenting and collaboration (later phase)

Export reports (CSV/PDF)

(Future) AI recommendations for new creatives

🛠️ Tech Stack:
Frontend: Next.js (React), TailwindCSS, Recharts

Backend: Node.js (Express), Prisma ORM

DB: PostgreSQL

Auth: NextAuth.js (OAuth - Facebook/Google)

API Data: Meta Ads API + Google Ads API

Cache: Redis

Hosting: Vercel (Frontend), AWS EC2 or Render (Backend)

🔐 Facebook (Meta) Integration:
Using Meta Ads API v19.0

OAuth2 login with ads_read scope

Pull creative data from:

GET /act_{ad_account_id}/adcreatives

GET /{ad_id}/insights (impressions, clicks, spend, CTR, etc.)

👨‍💻 Developer Background:
I'm an Android dev, fluent in Kotlin + Java

Also comfortable with Flutter

Chose Next.js for this project due to its scalability and ecosystem

Now help me:
✅ Plan architecture
✅ Suggest improvements
✅ Show clean UI layouts
✅ Help write Meta API integration code (Node.js)
✅ Recommend scalable patterns
  