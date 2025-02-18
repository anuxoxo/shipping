import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { Box } from "../types/box";
import { BoxContextProps } from "../types/boxContextProps";

const BoxContext = createContext<BoxContextProps | undefined>(undefined);

export const BoxProvider = ({ children }: { children: ReactNode }) => {
  const [boxes, setBoxes] = useState<Box[]>(() => {
    const storedBoxes = localStorage.getItem("boxes");
    return storedBoxes ? JSON.parse(storedBoxes) : [];
  });

  useEffect(() => {
    localStorage.setItem("boxes", JSON.stringify(boxes));
  }, [boxes]);

  const addBox = (box: Box) => {
    setBoxes((prev) => {
      const updatedBoxes = [...prev, box];
      localStorage.setItem("boxes", JSON.stringify(updatedBoxes));
      return updatedBoxes;
    });
  };

  const clearBoxes = () => {
    setBoxes([]);
    localStorage.removeItem("boxes");
  };

  return (
    <BoxContext.Provider value={{ boxes, addBox, clearBoxes }}>
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
