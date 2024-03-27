"use client";

import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Menu, X } from "lucide-react";
import { useContext } from "react";
import { StylesContext } from "@/context/stylesContext";

export default function NavBar() {
  const { isOpen, setIsOpen } = useContext(StylesContext);
  const handleSideBarToggle = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="min-h-[7%] flex flex-row justify-between items-center p-4 border-b border-b-slate-600 mx-4">
      <div className="flex flex-row gap-x-4">
        <BrainCircuit />
        ThisAndThat
      </div>
      <div className="hidden lg:flex flex-row gap-x-6">
        <Link href="/" className="link">
          Home
        </Link>
        <Link href="/" className="link">
          Products
        </Link>
        <Link href="/" className="link">
          About
        </Link>
        <Link href="/" className="link">
          Contact us
        </Link>
      </div>
      <Toggle className="lg:hidden" onClick={handleSideBarToggle}>
        {isOpen ? <X /> : <Menu />}
      </Toggle>
    </nav>
  );
}
