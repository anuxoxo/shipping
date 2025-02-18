import { createContext, useState, ReactNode, useContext } from "react";
import { Box } from "../types/box";
import { BoxContextProps } from "../types/boxContextProps";

const BoxContext = createContext<BoxContextProps | undefined>(undefined);

export const BoxProvider = ({ children }: { children: ReactNode }) => {
  const [boxes, setBoxes] = useState<Box[]>([]);

  const addBox = (box: Box) => {
    setBoxes((prev) => [...prev, box]);
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox }}>
      {children}
    </BoxContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBoxContext = () => {
  const context = useContext(BoxContext);
  if (!context) {
    throw new Error("useBoxContext must be used within a BoxProvider");
  }
  return context;
};
