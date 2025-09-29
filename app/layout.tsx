import type { Metadata } from "next";
import ThemeWrapper from '../components/ThemeWrapper';
import "./globals.css";

export const metadata: Metadata = {
  title: "Kriti - Software Engineer Portfolio",
  description: "Full-stack software engineer specializing in Python, React, and cloud technologies. Explore my projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
