
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./components/SectionsPremium.css";
import "./globals.css";
import PromoPopups from "./components/PromoPopups";

export const metadata: Metadata = {
  title: "Veftor | Link Building Marketplace",
  description:
    "Discover publishers, compare placement options, and simplify your link-building campaigns with Veftor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PromoPopups />
      </body>
    </html>
  );
}
