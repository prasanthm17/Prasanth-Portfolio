import type { Metadata } from "next";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";

export const metadata: Metadata = {
  title: "Prasanth M — AI UX Designer | Product Designer | UX Engineer",
  description:
    "Prasanth M is an AI UX Designer, Product Designer and UX Engineer specializing in enterprise SaaS, Agentic UI, AI-powered experiences and scalable design systems.",
  metadataBase: new URL("https://prasanthm.vercel.app"),
  openGraph: {
    title: "Prasanth M — AI UX Designer | Product Designer | UX Engineer",
    description:
      "Prasanth M is an AI UX Designer, Product Designer and UX Engineer specializing in enterprise SaaS, Agentic UI, AI-powered experiences and scalable design systems.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanth M — AI UX Designer | Product Designer | UX Engineer",
    description:
      "Prasanth M is an AI UX Designer, Product Designer and UX Engineer specializing in enterprise SaaS, Agentic UI, AI-powered experiences and scalable design systems."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
