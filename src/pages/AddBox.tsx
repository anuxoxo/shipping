import { lazy } from "react";
const BoxForm = lazy(() => import("../components/BoxForm"));
import styles from "../styles/AddBox.module.scss";

const AddBox = () => {
  return (
    <div className={styles.AddBox}>
      <BoxForm />
    </div>
  );
};

export default AddBox;
