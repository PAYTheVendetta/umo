import type { Metadata } from "next";
import "./styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Umo Burger",
  description: "Comandera de pedidos centralizada",
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
