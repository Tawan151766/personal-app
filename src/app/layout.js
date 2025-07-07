import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Stitch Design - Portfolio",
  description: "Ethan Carter - Full-Stack Developer Portfolio",
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
        />
        {/* Optional: Tailwind CDN plugins if you really need them (not recommended in production) */}
        <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
