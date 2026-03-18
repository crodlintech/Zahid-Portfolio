import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zahid | Content Writer & Storyteller",
  description:
    "I write things people actually read. Content that feels right, reads easy, and stays longer than it should. Writer-first, SEO-aware content for brands that want to sound human.",
  keywords: [
    "content writer",
    "SEO writer",
    "copywriter",
    "storyteller",
    "blog writer",
    "brand voice",
  ],
  authors: [{ name: "Zahid" }],
  openGraph: {
    title: "Zahid | Content Writer & Storyteller",
    description:
      "Words that feel right, read easy, and stay longer than they should.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
