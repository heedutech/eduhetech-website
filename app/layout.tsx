import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduHeTech | Learn. Create. Earn.",
  description:
    "EduHeTech builds technology, health education and AI-powered digital solutions for a smarter future.",
  keywords: [
    "EduHeTech",
    "health education",
    "technology",
    "AI",
    "digital education",
    "TherapyDent",
  ],
  authors: [
    {
      name: "EduHeTech Technologies Limited",
    },
  ],
  openGraph: {
    title: "EduHeTech | Learn. Create. Earn.",
    description:
      "Technology-powered education and digital solutions for health, learning and the future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
