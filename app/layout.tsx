import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zahid | Content Writer & Storyteller",
  description:
    "I write things people actually read. Words that feel right, read easy, and stay longer than they should. Content writer specializing in SEO, storytelling, and strategy.",
  keywords: [
    "content writer",
    "SEO writer",
    "storyteller",
    "blog writer",
    "copywriter",
    "Zahid",
  ],
  authors: [{ name: "Zahid" }],
  openGraph: {
    title: "Zahid | Content Writer & Storyteller",
    description:
      "I write things people actually read. Words that feel right, read easy, and stay longer than they should.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
