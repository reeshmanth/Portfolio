import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";


const font=Sora({
  weight:['100','200','300','400','500','600','700','800'],
  subsets:['latin']
})
export const metadata: Metadata = {
  title: "Reeshmanth Portfolio",
  description: "Reeshmanth Portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar" >
      <head>
        <title>Reeshmanth Portfolio</title>
      </head>
      <body
        className={font.className}>
          <ResponsiveNav />
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
