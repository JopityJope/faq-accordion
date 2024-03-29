import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FAQ Accordion",
  description: "FAQ accordion challenge on Frontend Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
