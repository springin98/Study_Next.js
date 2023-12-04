import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import StyledComponentsRegistry from "./(pages)/registry";
import StyledJsxRegistry from "./registry";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js study",
  description: "Next.js study : bomin, harim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
        {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
