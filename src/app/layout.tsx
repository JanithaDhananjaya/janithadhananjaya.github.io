import type { Metadata } from "next";
import { JetBrains_Mono, Fraunces } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { InitialLoader } from "@/components/InitialLoader";
import { SpotifyWidget } from "@/components/SpotifyWidget";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://janithadhananjaya.github.io";
const TITLE = "Janitha Silva | Senior Full-Stack Engineer";
const DESCRIPTION =
  "Senior Full-Stack Engineer with 7+ years shipping enterprise SaaS for pharma, telecom, and government. Open to lead & staff roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Full-Stack Engineer",
    "Senior Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Enterprise SaaS",
    "Janitha Silva",
  ],
  authors: [{ name: "Janitha Silva", url: SITE_URL }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Janitha Silva",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Janitha Silva — Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body>
        <ThemeProvider>
          <InitialLoader />
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
          <SpotifyWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
