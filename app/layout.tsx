import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { StylesContextProvider } from "@/context/stylesContext";
import ScreenLayout from "@/components/screenLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <StylesContextProvider>
        <body className={inter.className}>
          <ScreenLayout>
            <NavBar />
            <main className="min-h-[92%] flex flex-row overflow-x-hidden pt-4">
              <SideBar />
              {children}
            </main>
          </ScreenLayout>
        </body>
      </StylesContextProvider>
    </html>
  );
}
