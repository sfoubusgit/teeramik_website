import "../styles/globals.css";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "TeeRamik",
    template: "%s | TeeRamik",
  },
  description: "Tee, Keramik und besondere Geschenkideen in Wedel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow-soft"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
