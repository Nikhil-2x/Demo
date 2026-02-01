import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google"
import "./globals.css";

const robotFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth", "slnt", "opsz"]
});


export const metadata: Metadata = {
  title: "Nick's Keyboard",
  description: "Made for learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotFlex.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
