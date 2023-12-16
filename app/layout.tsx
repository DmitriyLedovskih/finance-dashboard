import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const montserrat = Montserrat({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Sidebar />
        <div className="container">
          <Header />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
