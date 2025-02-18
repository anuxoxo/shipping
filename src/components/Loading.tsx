import ScaleLoader from "react-spinners/ScaleLoader";
import styles from "../styles/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <ScaleLoader color={"#33357B"} />
    </div>
  );
}
