import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});


const ovo = Ovo({
  subsets: ['latin'],
  variable: "--font-ovo",
  weight: ["400"],
});

export const metadata = {
  title: "portfolio",
  description: "Generated by create portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}