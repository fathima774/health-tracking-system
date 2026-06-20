import React, { useState } from "react";

function WeightTracker() {
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWeight = {
      weight,
      date,
    };

    const existingWeights =
      JSON.parse(localStorage.getItem("weights")) || [];

    const updatedWeights = [...existingWeights, newWeight];

    localStorage.setItem(
      "weights",
      JSON.stringify(updatedWeights)
    );

    alert("Weight Added Successfully!");

    setWeight("");
    setDate("");
  };

  return (
    <div>
      <h2>Weight Tracker</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">
          Add Weight
        </button>
      </form>
    </div>
  );
}

export default WeightTracker;