"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";

interface StyleContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  screenWidth: number;
  setScreenWidth: React.Dispatch<React.SetStateAction<number>>;
}

export const StylesContext = createContext<StyleContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  screenWidth: 0,
  setScreenWidth: () => {},
});

export const StylesContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const StyleContextValues = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      screenWidth,
      setScreenWidth,
    }),
    [isOpen, setIsOpen, screenWidth, setScreenWidth]
  );

  return (
    <StylesContext.Provider value={StyleContextValues}>
      {children}
    </StylesContext.Provider>
  );
};
