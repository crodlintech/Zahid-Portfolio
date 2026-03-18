import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zahid Shaikh — Content Writer",
  description:
    "I write things people actually read. And algorithms don't ignore. Words that feel right, read easy, and stay longer than they should.",
  keywords: ["content writer", "SEO writer", "blog writer", "copywriter", "storytelling"],
  openGraph: {
    title: "Zahid Shaikh — Content Writer",
    description: "I write for people first. The internet just follows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-[family-name:var(--font-poppins)] bg-[#f9f7f4] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
