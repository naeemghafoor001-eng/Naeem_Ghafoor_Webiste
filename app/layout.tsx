import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Naeem Ghafoor | Research, Policy & Digital Solutions",
  description:
    "Evidence-based research, professional reports, data analysis, presentations, AI solutions and digital support for researchers, civil servants, organisations and decision-makers.",
  keywords: [
    "Naeem Ghafoor",
    "research consultant Pakistan",
    "policy research Pakistan",
    "academic research support",
    "dissertation research support",
    "data analysis Pakistan",
    "SPSS research support",
    "R data analysis",
    "Python data analysis",
    "policy brief consultant",
    "PowerPoint presentation designer",
    "civil service research support Pakistan",
    "CTP research support",
    "MCMC research support",
    "SMC research support",
    "NMC research support",
    "AI solutions Pakistan",
    "research and digital solutions",
    "professional report writing",
  ],
  authors: [{ name: "Naeem Ghafoor" }],
  creator: "Naeem Ghafoor",
  metadataBase: new URL("https://naeem-ghafoor-website.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://naeem-ghafoor-website.vercel.app",
    title: "Naeem Ghafoor | Research, Policy & Digital Solutions",
    description:
      "Turning complex ideas, evidence and data into clear research, professional reports, presentations and practical digital solutions.",
    siteName: "Naeem Ghafoor",
    images: [
      {
        url: "/images/naeem-ghafoor.jpg",
        width: 800,
        height: 1000,
        alt: "Naeem Ghafoor - Research, Policy & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naeem Ghafoor | Research, Policy & Digital Solutions",
    description:
      "Professional support for researchers, civil servants, businesses, and international clients across research, policy, data analysis, presentations, AI and digital development.",
    images: ["/images/naeem-ghafoor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="bg-offwhite text-bodytext font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-softgreen selection:text-forest">
        <Header />
        <main className="grow">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
