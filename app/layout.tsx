import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";


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
    <html lang="en" className="custom-scrollbar bg-[#0f0715] h-full" >
      <head>
        <title>Reeshmanth Portfolio</title>
      </head>
      <body
        className={`${font.className} bg-[#0f0715] h-full overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
