import type React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
