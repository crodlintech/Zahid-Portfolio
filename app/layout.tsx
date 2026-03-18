import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zahid | Content Writer & Storyteller",
  description:
    "I write things people actually read. Words that feel right, read easy, and stay longer than they should.",
  keywords: [
    "content writer",
    "SEO writer",
    "copywriter",
    "storyteller",
    "blog writer",
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
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
