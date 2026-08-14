# Naeem Ghafoor | Research, Policy & Digital Solutions

A complete, production-ready, premium personal professional services website for **Naeem Ghafoor**, designed for deployment on **Vercel**.

This website serves as a high-converting professional client acquisition platform attracting research, policy, data, presentation, AI, and digital solution clients from Pakistan, the UK, and international markets.

---

## Technical Features

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom corporate design system
- **Icons**: Lucide React
- **Animations**: Framer Motion subtle entrance and scroll micro-interactions
- **Contact API**: Vercel-ready Next.js Server Route (`/api/contact`) supporting **Resend** with honeypot spam protection and client validation
- **SEO & Social Sharing**: Complete Open Graph, Twitter Cards, Canonical Metadata, and JSON-LD structured data (`Person`, `ProfessionalService`, `WebSite`)
- **Direct Conversion Channels**: Floating WhatsApp widget (`https://wa.me/923025887436`) with pre-filled prompt, Mailto integrations, and custom Consultation modal

---

## Project Structure

```text
├── app/
│   ├── layout.tsx                # Root layout with fonts, sticky header, footer, WhatsApp float
│   ├── page.tsx                  # Homepage with 17 structured sections
│   ├── about/page.tsx            # Full biography & institutional background
│   ├── services/page.tsx         # Detailed breakdown of all 8 core service categories
│   ├── executive-support/page.tsx# Specialised landing page for CTP, MCMC, SMC, NMC participants
│   ├── portfolio/page.tsx        # Filterable project showcase with search & modal views
│   ├── publications/page.tsx     # Peer-reviewed journal papers & policy articles
│   ├── ai-digital-solutions/page.tsx # AI workflows, Python tools & dashboard prototypes
│   ├── contact/page.tsx          # Full project enquiry form & consultation requests
│   ├── api/contact/route.ts      # Serverless API endpoint for processing enquiries
│   ├── globals.css               # Base styles & typography variables
│   ├── sitemap.ts                # SEO Sitemap generator
│   └── robots.ts                 # Search crawler rules
├── components/
│   ├── Header.tsx                # Sticky navigation header with NG monogram logo
│   ├── Hero.tsx                  # Split-screen hero with Naeem Ghafoor portrait card
│   ├── CredibilityStrip.tsx      # Factual credentials bar
│   ├── AboutSection.tsx          # Summary bio & public service history
│   ├── RecognitionSection.tsx    # Feature card for Certificate of Appreciation & recognition
│   ├── ServicesGrid.tsx          # 8 core service cards with action triggers
│   ├── ExecutiveSupportSection.tsx # Public sector & executive training research support
│   ├── PortfolioSection.tsx      # Filterable project grid & modal viewer
│   ├── AIDigitalSection.tsx      # AI integration & digital solution showcase
│   ├── ToolkitSection.tsx        # Technical toolkit by category (no fake percentages)
│   ├── PublicationsSection.tsx   # Journal papers & external policy links
│   ├── WhoIWorkWith.tsx          # Target audience cards (Researchers, Civil Servants, etc.)
│   ├── WhyWorkWithMe.tsx          # 6 core principles (Research-Led, Confidentiality, etc.)
│   ├── ClientFeedback.tsx        # Clean placeholder for verified client reviews
│   ├── ContactForm.tsx           # Multi-field enquiry form with honeypot & validation
│   ├── ConsultationModal.tsx     # Consultation booking popup modal
│   ├── FloatingWhatsApp.tsx      # Bottom-right quick message trigger
│   ├── Footer.tsx                # 4-column footer with disclaimers & copyright
│   └── JsonLd.tsx                # Schema.org structured data component
├── data/
│   ├── portfolioData.ts          # Structured project data (15 representative projects)
│   ├── servicesData.ts           # Core service category definitions
│   └── publicationsData.ts       # Peer-reviewed papers & external article links
└── public/
    └── images/
        └── naeem-ghafoor.jpg     # High-resolution professional portrait
```

---

## Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build & Production Check**:
   ```bash
   npm run build
   npm run start
   ```

---

## Deployment to Vercel

1. **Push to GitHub**:
   Commit the repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Naeem Ghafoor Website"
   git remote add origin https://github.com/YOUR_USERNAME/naeem-ghafoor-website.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Log into [Vercel](https://vercel.com).
   - Click **Add New Project** and select your GitHub repository.
   - Set Framework Preset to **Next.js**.

3. **Configure Environment Variables in Vercel**:
   In the Vercel Project Settings -> Environment Variables, add:
   - `RESEND_API_KEY`: Your API Key from [Resend](https://resend.com)
   - `CONTACT_NOTIFICATION_EMAIL`: `naeemghafoor001@gmail.com`

4. **Deploy**:
   Click **Deploy**. Vercel will build and deploy the project. Your live URL will be `https://naeem-ghafoor-website.vercel.app` (or your custom domain).

---

## Updating Data & Adding Content

### Adding Portfolio Items
Edit `data/portfolioData.ts` to add or modify projects. Each project entry follows this TypeScript schema:
```ts
{
  id: "project-slug",
  title: "Project Title",
  category: "Research & Policy", // 'Research & Policy' | 'Data & AI' | 'Business & ESG' | ...
  summary: "Concise 2-3 sentence overview.",
  problem: "Brief background/context.",
  approach: "Methodology and execution.",
  tools: ["SPSS", "R", "Python"],
  deliverable: "Deliverable type (e.g. Policy Brief, Presentation)",
  outcome: "Key impact or analytical result."
}
```

### Adding Verified Testimonials
When verified client reviews are available, edit `components/ClientFeedback.tsx` to uncomment the testimonial slider/grid and supply verified quotes.

---

## Disclaimers & Academic Integrity

- **Public-Service Disclaimer**: Views and professional services presented on this website are offered in a personal capacity and do not represent or imply endorsement by the Government of the Punjab, Home Department, or Punjab Probation & Parole Service.
- **Academic Integrity Statement**: Academic support is provided strictly for research assistance, learning support, editing, data analysis, formatting, and professional guidance. Clients remain responsible for compliance with the academic integrity requirements of their respective institutions.
