import { Lato } from "next/font/google";
import type { Viewport } from "next";
import "tailwindcss/tailwind.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
}

const lato = Lato({ weight: ["100","300"], subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${lato.className} text-foreground`}>
    {children}
    </body>
    </html>
  );
}
