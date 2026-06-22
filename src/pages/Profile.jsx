import React, { useState, useEffect } from "react";
import "../assets/styles/profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(
    localStorage.getItem("height") || ""
  );

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    setUser(currentUser);

    const weights =
      JSON.parse(localStorage.getItem("weights")) || [];

    if (weights.length > 0) {
      setWeight(
        Number(weights[weights.length - 1].weight)
      );
    }
  }, []);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);

    localStorage.setItem(
      "height",
      e.target.value
    );
  };

  const bmi =
    height && weight
      ? (
          weight /
          Math.pow(height / 100, 2)
        ).toFixed(1)
      : 0;

  const getBMIStatus = () => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal Weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  if (!user) {
    return (
      <div className="profile-container">
        <h2>No User Logged In</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">

      <div className="profile-card">

        <h1>👤 My Profile</h1>

        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Current Weight:</strong>{" "}
            {weight} kg
          </p>

          <div className="height-input">
            <label>
              <strong>Height (cm):</strong>
            </label>

            <input
              type="number"
              value={height}
              onChange={handleHeightChange}
              placeholder="Enter Height"
            />
          </div>

          <p>
            <strong>BMI:</strong> {bmi}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {getBMIStatus()}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Profile;