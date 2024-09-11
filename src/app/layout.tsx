import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";

export const metadata: Metadata = {
  title: "Furniture",
  description: "Furniture Shop",
  icons: [{ rel: "icon", url: "/img.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="w-screen">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
