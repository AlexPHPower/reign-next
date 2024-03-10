// src/app/layout.tsx

import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        <main>{children}</main>
        <Toaster/>
        <Footer />
        </body>
        </html>
    );
}
