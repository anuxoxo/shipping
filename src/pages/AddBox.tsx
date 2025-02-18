import { lazy } from "react";
const BoxForm = lazy(() => import("../components/BoxForm"));
import styles from "../styles/AddBox.module.scss";
import heroImg from "../assets/addBox/hero.png";

const AddBox = () => {
  return (
    <div className={styles.AddBox}>
      <div className={styles.AddBox__img}>
        <img src={heroImg} alt="hero" />
      </div>
      <div className={styles.AddBox__form}>
        <BoxForm />
      </div>
    </div>
  );
};

export default AddBox;
