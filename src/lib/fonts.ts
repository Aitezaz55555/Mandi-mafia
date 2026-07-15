import { Cormorant_Garamond, Plus_Jakarta_Sans, Pirata_One } from "next/font/google";

export const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const fontGothic = Pirata_One({
  subsets: ["latin"],
  variable: "--font-gothic",
  weight: ["400"],
  display: "swap",
});
