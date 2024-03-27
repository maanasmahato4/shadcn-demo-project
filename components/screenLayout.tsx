"use client";
import { StylesContext } from "@/context/stylesContext";
import React, { useContext, useEffect } from "react";

export default function ScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { screenWidth, setScreenWidth, setIsOpen } = useContext(StylesContext);
  useEffect(() => {
    const toggleScreenSize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (screenWidth >= 1024) {
      setIsOpen(true);
    } else if (screenWidth < 1024) {
      setIsOpen(false);
    }

    window.addEventListener("resize", toggleScreenSize);
  }, [screenWidth, setScreenWidth, setIsOpen]);
  return <>{children}</>;
}
