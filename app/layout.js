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
  title: "RACS-2026 | National Conference on Recent Advances in Chemical Sciences - ICT Mumbai",
  description: "National Conference RACS-2026 on Recent Advances in Chemical Sciences for Societal and Industrial Applications, January 2026. Organized by ICT Mumbai & Indian Chemical Society. Submit abstracts, present research, and network with leading chemists and researchers.",
  keywords: "RACS-2026, RACS 2026, chemical sciences conference 2026, ICT Mumbai conference, Indian Chemical Society, chemistry conference India, national chemistry conference, chemical engineering conference, industrial chemistry, research conference, chemistry symposium, abstract submission chemistry, chemistry research papers, chemical innovations, Mumbai conference 2026, academic conference chemistry",
  authors: [
    { name: "Institute of Chemical Technology Mumbai" },
    { name: "Indian Chemical Society" }
  ],
  creator: "Omkar Parelkar",
  publisher: "Institute of Chemical Technology Mumbai",
  
  // Favicon configuration
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  
  openGraph: {
    title: "RACS-2026 | National Conference on Chemical Sciences - ICT Mumbai",
    description: "National Conference on Recent Advances in Chemical Sciences for Societal and Industrial Applications, January 2026. Organized by ICT Mumbai & Indian Chemical Society. Submit your abstracts now!",
    url: "https://www.racs2026.in",
    siteName: "RACS-2026",
    type: "website",
    locale: "en_IN"
  },
  
  twitter: {
    card: "summary",
    title: "RACS-2026 | National Conference on Chemical Sciences",
    description: "National Conference on Recent Advances in Chemical Sciences for Societal and Industrial Applications, January 2026.",
    creator: "@ICTMumbai"
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: "https://www.racs2026.in"
  },
  
  category: "Education & Research",
  
  // Additional SEO metadata
  applicationName: "RACS-2026",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Structured data for better search results
  other: {
    "event:start_time": "2026-01-20T09:00:00+05:30",
    "event:end_time": "2026-01-22T17:00:00+05:30",
    "event:location": "Institute of Chemical Technology, Mumbai, India"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favi.ico" sizes="any" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
