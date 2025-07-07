import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700", "900"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "Tawan - Portfolio",
  description: "Tawan Chankachang - Full-Stack Developer Portfolio",
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <html lang="en" className={`${inter.variable} ${notoSans.variable}`}>
      <head>
        {/* Optional: Tailwind CDN plugins if you really need them (not recommended in production) */}
        <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
      </head>
      <body
        className={`antialiased ${inter.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
