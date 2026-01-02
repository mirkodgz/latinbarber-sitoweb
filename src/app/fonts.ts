import { Bebas_Neue, Inter, Staatliches } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

