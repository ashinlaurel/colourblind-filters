import React, { useState, useMemo } from "react";

// create context
export const ColourContext = React.createContext();

export const ColourProvider = ({ children }) => {
  const [colourmode, setColourMode] = useState("Normal");

  return (
    <ColourContext.Provider
      value={{
        colourmode,
        setColourMode,
      }}
    >
      {children}
    </ColourContext.Provider>
  );
};
