import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SwipeNavigator from "@/components/SwipeNavigator";
import ScrollRestorer from "@/components/ScrollRestorer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pétanque Corbeanca",
  description: "Clubul de Pétanque Corbeanca — pasiune, prietenie și bile de metal.",
  icons: { icon: "/favicon.svg", apple: "/logo.png" },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "ro" | "en" | "fr")) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={geist.className}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <NextIntlClientProvider messages={messages}>
          <SwipeNavigator>
            <ScrollRestorer />
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </SwipeNavigator>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
