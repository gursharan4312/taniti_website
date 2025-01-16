import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/navbar'
import Footer from '../components/footer'



export const metadata: Metadata = {
  title: "Taniti",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen-2xl mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
