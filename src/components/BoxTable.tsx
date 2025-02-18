import { memo } from "react";
import { useBoxContext } from "../context/BoxContext";
import styles from "../styles/BoxTable.module.scss";
import { Circle } from "./Circle";
import { GrRefresh } from "react-icons/gr";

import noResultsImg from "../assets/noResults.jpg";

const BoxTable = memo(() => {
  const { boxes, clearBoxes } = useBoxContext();

  if (boxes.length === 0) {
    return (
      <div className={styles.noResults}>
        <img src={noResultsImg} alt="No results" />
        <p className={styles.noBoxesMessage}>
          No boxes available.
          <br />
          Please add a box to see the list.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.BoxTable}>
      <div className={styles.tableHeader}>
        <h3>Box List</h3>
        <button className={styles.clearBtn} onClick={clearBoxes}>
          Clear <GrRefresh />
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Receiver's Name</th>
              <th>Weight (kg)</th>
              <th>Box Color</th>
              <th>Destination</th>
              <th>Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box) => (
              <tr key={box.id}>
                <td>{box.receiverName}</td>
                <td>{box.weight}</td>
                <td>
                  <div className={styles.flex}>
                    <Circle color={box.boxColor} />
                    {box.boxColor}
                  </div>
                </td>
                <td>{box.destination}</td>
                <td>INR {box.shippingCost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default BoxTable;
