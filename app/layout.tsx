import type {
  Metadata,
  Viewport,
} from "next";

import { Caveat } from "next/font/google";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import "./globals.css";


/* =========================================================
   TIPOGRAFÍA PRINCIPAL
   BRUSH / SCRIPT
   ========================================================= */

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
});


/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    default: "Moro Capital",
    template: "%s | Moro Capital",
  },

  description:
    "Moro Capital es un holding inmobiliario dedicado a la creación y desarrollo de proyectos innovadores y oportunidades de inversión.",

  keywords: [
    "Moro Capital",
    "inversiones inmobiliarias",
    "inversión inmobiliaria",
    "fondo de inversión",
    "renta fija",
    "Huancayo",
    "Moro 416",
  ],

  authors: [
    {
      name: "Moro Capital",
    },
  ],

  creator: "Moro Capital",
  publisher: "Moro Capital",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};


/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={script.variable}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}