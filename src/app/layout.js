// app/layout.js or app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "alkye",
  description: "The easiest test you will ever do",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` font-soehne antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
