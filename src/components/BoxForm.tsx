import React, { useState, useEffect } from "react";
import styles from "../styles/BoxForm.module.scss";
import { destinations, hexToRgb } from "../utils";
import { useNavigate } from "react-router-dom";
import { useBoxContext } from "../context/BoxContext";

const BoxForm: React.FC = () => {
  const { boxes, addBox } = useBoxContext();
  const [receiverName, setReceiverName] = useState("");
  const [weight, setWeight] = useState<number>(0);
  const [boxColor, setBoxColor] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [errors, setErrors] = useState({
    receiverName: "",
    weight: "",
    boxColor: "",
    destination: "",
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const navigate = useNavigate();

  const validateField = (field: string) => {
    let error = "";
    switch (field) {
      case "receiverName":
        if (!receiverName) {
          error = "Receiver's name is required.";
        }
        break;
      case "weight":
        if (weight <= 0) {
          error = "Weight must be greater than zero.";
        }
        break;
      case "boxColor":
        if (!boxColor) {
          error = "Box color is required.";
        }
        break;
      case "destination":
        if (!destination) {
          error = "Destination is required.";
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error === "";
  };

  // Automatically calculate shipping cost when all fields are filled
  useEffect(() => {
    if (receiverName && weight > 0 && boxColor && destination) {
      const multiplier =
        destinations.find((d) => d.name === destination)?.costMultiplier || 1;
      const shippingCost = weight * multiplier;
      setCalculatedPrice(Number(shippingCost.toFixed(2)));
    } else {
      setCalculatedPrice(null);
    }
  }, [receiverName, weight, boxColor, destination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid =
      validateField("receiverName") &&
      validateField("weight") &&
      validateField("boxColor") &&
      validateField("destination");

    if (!isValid) return;

    const multiplier =
      destinations.find((d) => d.name === destination)?.costMultiplier || 1;
    const shippingCost = weight * multiplier;

    addBox({
      id: boxes.length + 1,
      receiverName,
      weight,
      boxColor: hexToRgb(boxColor),
      destination,
      shippingCost,
    });

    alert(
      `Box saved successfully! Shipping Cost is: INR ${Number(
        shippingCost.toFixed(2)
      )}.`
    );

    setTimeout(() => {
      navigate("/table");
    }, 1000);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add Shipping Box</h2>
      <form onSubmit={handleSubmit} className={styles.boxForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="receiverName">Receiver's Name</label>
          <input
            type="text"
            id="receiverName"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            onBlur={() => validateField("receiverName")}
            className={styles.input}
            placeholder="Enter receiver's name"
          />
          {errors.receiverName && (
            <p className={styles.error}>{errors.receiverName}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            onBlur={() => validateField("weight")}
            className={styles.input}
            placeholder="Enter box weight"
            min="0"
          />
          {errors.weight && <p className={styles.error}>{errors.weight}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="boxColor">Box Color</label>
          <input
            type="color"
            id="boxColor"
            value={boxColor}
            onChange={(e) => setBoxColor(e.target.value)}
            onBlur={() => validateField("boxColor")}
            className={styles.inputColor}
          />
          {errors.boxColor && <p className={styles.error}>{errors.boxColor}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="destination">Destination Country</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onBlur={() => validateField("destination")}
            className={styles.select}
          >
            <option value="">Select destination</option>
            {destinations.map((dest) => (
              <option key={dest.name} value={dest.name}>
                {dest.name} ({dest.costMultiplier} INR)
              </option>
            ))}
          </select>
          {errors.destination && (
            <p className={styles.error}>{errors.destination}</p>
          )}
        </div>

        {calculatedPrice !== null && (
          <div className={styles.priceDisplay}>
            <p className={styles.calculatedPrice}>
              Total Shipping Cost <br /> <span>INR {calculatedPrice}</span>
            </p>
          </div>
        )}

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitBtn}>
            Save Box
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoxForm;
