import type { Metadata } from "next";
import { bebasNeue, inter, staatliches } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://latinbarberstudio.it"),
  title: "LATIN BARBER STUDIO - Barbiere a Milano",
  description:
    "Il punto di riferimento per lo stile maschile a Milano. Dove l'energia latina incontra l'eleganza italiana. Tagli moderni, barberia classica e trattamenti premium.",
  keywords: ["barbiere milano", "barber shop milano", "taglio uomo milano", "barba milano", "latin barber", "sfumatura", "fades", "parrucchiere uomo", "loreggio", "bicocca"],
  openGraph: {
    title: "LATIN BARBER STUDIO - Barbiere a Milano",
    description:
      "Il punto di riferimento per lo stile maschile a Milano. Dove l'energia latina incontra l'eleganza italiana.",
    url: "https://latinbarberstudio.it",
    siteName: "Latin Barber Studio",
    images: [
      {
        url: "/Imagen-OG-Foto-Portada-Latinbarberstudio.jpg",
        width: 1200,
        height: 630,
        alt: "Latin Barber Studio - Barbiere a Milano",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: "/favicon-500x500-latinbarber.jpg",
    shortcut: "/favicon-500x500-latinbarber.jpg",
    apple: "/favicon-500x500-latinbarber.jpg",
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=event_available"
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${staatliches.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
