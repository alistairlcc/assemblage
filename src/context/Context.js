import React, { createContext, useState, useEffect } from "react";

import { colorModes } from "../utils/common";

const defaultValues = {
  colorMode: colorModes[0],
  setColorMode: () => false,
};

export const Context = createContext(defaultValues);

export const Provider = ({ children }) => {
  const [colorMode, setColorMode] = useState(colorModes[0]);

  useEffect(() => {
    colorModes.forEach((cm) => {
      document.documentElement.classList.toggle(`${cm}-mode`, cm === colorMode);
    });
  }, [colorMode]);

  return (
    <Context.Provider
      value={{
        colorMode,
        setColorMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
