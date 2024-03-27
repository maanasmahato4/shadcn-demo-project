"use client";

import { StylesContext } from "@/context/stylesContext";
import { useContext } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SideBar() {
  const { isOpen } = useContext(StylesContext);
  return (
    <aside
      className={`transition-all duration-300 ease-out ${
        isOpen
          ? "px-4 min-w-[100%] lg:min-w-[20%] lg:border-r lg:border-x-slate-600"
          : "min-w-[0%] opacity-0"
      }
      `}
    >
      <div className="flex flex-col gap-x-4 gap-y-2 px-2">
        <Link
          href="/"
          className="py-2 px-2 rounded-sm hover:bg-slate-300 hover:bg-opacity-10 focus:bg-slate-300 focus:bg-opacity-10"
        >
          Section A
        </Link>
        <Link
          href="/"
          className="py-2 px-2 rounded-sm hover:bg-slate-300 hover:bg-opacity-10 focus:bg-slate-300 focus:bg-opacity-10"
        >
          Section B
        </Link>
        <Link
          href="/"
          className="py-2 px-2 rounded-sm hover:bg-slate-300 hover:bg-opacity-10 focus:bg-slate-300 focus:bg-opacity-10"
        >
          Section C
        </Link>
        <Link
          href="/"
          className="py-2 px-2 rounded-sm hover:bg-slate-300 hover:bg-opacity-10 focus:bg-slate-300 focus:bg-opacity-10"
        >
          Section D
        </Link>
        <Link
          href="/"
          className="py-2 px-2 rounded-sm hover:bg-slate-300 hover:bg-opacity-10 focus:bg-slate-300 focus:bg-opacity-10"
        >
          Section E
        </Link>
        <Separator />
        <Select>
          <SelectTrigger className="w-[100%] py-2">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
}
