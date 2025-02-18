import { memo } from "react";
import { useBoxContext } from "../context/BoxContext";
import styles from "../styles/BoxTable.module.scss";
import { Circle } from "./Circle";

const BoxTable = memo(() => {
  const { boxes } = useBoxContext();

  if (boxes.length === 0) {
    return (
      <div className={styles.tableContainer}>
        <p className={styles.noBoxesMessage}>
          No boxes available. Please add a box to see the list.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.BoxTable}>
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
  );
});

export default BoxTable;
