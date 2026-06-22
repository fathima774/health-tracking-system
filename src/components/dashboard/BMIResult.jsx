import React from "react";
import "../../assets/styles/bmiresult.css";

function BMIResult({ weight, height }) {
  const bmi =
    weight && height
      ? (
          weight /
          Math.pow(height / 100, 2)
        ).toFixed(1)
      : 0;

  const getStatus = () => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal Weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="bmi-card">
      <h2>🧮 BMI Result</h2>

      <div className="bmi-value">{bmi}</div>

      <p className="bmi-status">{getStatus()}</p>
    </div>
  );
}

export default BMIResult;