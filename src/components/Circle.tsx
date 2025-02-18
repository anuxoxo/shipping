import { memo } from "react";
import styles from "../styles/Circle.module.scss";

export const Circle = memo(({ color }: { color: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={styles.Circle}
    ></div>
  );
});
