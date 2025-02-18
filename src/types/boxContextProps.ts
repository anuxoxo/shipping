import { Box } from "./box";

export interface BoxContextProps {
  boxes: Box[];
  addBox: (box: Box) => void;
  clearBoxes: () => void;
}