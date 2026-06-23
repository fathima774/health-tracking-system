import React, { useEffect, useState } from "react";
import "../../assets/styles/bmiresult.css";

function BMIResult() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    // Get logged-in user
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) || {};

    setHeight(Number(currentUser.height) || 0);

    // Get latest weight
    const storedWeights =
      JSON.parse(localStorage.getItem("weights")) || [];

    if (storedWeights.length > 0) {
      setWeight(
        Number(
          storedWeights[storedWeights.length - 1].weight
        )
      );
    }
  }, []);

  const bmi =
    height > 0 && weight > 0
      ? (
          weight /
          ((height / 100) * (height / 100))
        ).toFixed(1)
      : 0;

  const getBMIStatus = () => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="bmi-card">
      <h2>BMI Result</h2>

      <div className="bmi-details">
        <p>
          <strong>Height:</strong> {height} cm
        </p>

        <p>
          <strong>Weight:</strong> {weight} kg
        </p>
      </div>

      <h1 className="bmi-value">
        {bmi}
      </h1>

      <p className="bmi-status">
        {getBMIStatus()}
      </p>
    </div>
  );
}

export default BMIResult;