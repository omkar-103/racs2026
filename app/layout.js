import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RACS-2026",
  description: "National Conference on Recent Advances in Chemical Sciences for Societal and Industrial Applications",
  keywords: "RACS-2026, Chemical Sciences, Omkar Parelkar,Conference, ICT Mumbai",
  authors: [
    { name: "ICT Mumbai" },
    { name: "Indian Chemical Society" },
  ],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
