/**
 * Root layout — Breathe Cities Design Build
 *
 * Sets the global HTML shell: lang attribute and imports globals.css where
 * all tokens, @font-face declarations, and theme config live.
 *
 * Font loading: Söhne is loaded via @font-face in src/styles/fonts.css
 * (imported through globals.css). The font-sans Tailwind utility resolves
 * to the Söhne stack defined in the @theme block. No next/font needed.
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breathe Cities — Design Build",
  description:
    "Production design build for Breathe Cities — air quality data for every city on earth.",
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
