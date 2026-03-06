import { Cairo } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${cairo.variable} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
