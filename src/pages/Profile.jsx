import React, { useEffect, useState } from "react";
import "../assets/styles/profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    setUser(currentUser);

    const storedWeights =
      JSON.parse(localStorage.getItem("weights")) || [];

    if (storedWeights.length > 0) {
      setWeight(
        Number(
          storedWeights[
            storedWeights.length - 1
          ].weight
        )
      );
    }
  }, []);

  if (!user) {
    return (
      <div className="profile-container">
        <h2 className="no-user">
          No User Logged In
        </h2>
      </div>
    );
  }

  const age = user.age;

  const height =
    Number(user.height) || 170;

  const bmi =
    weight > 0
      ? (
          weight /
          Math.pow(height / 100, 2)
        ).toFixed(1)
      : 0;

  const bmiStatus =
    bmi < 18.5
      ? "Underweight"
      : bmi < 25
      ? "Normal Weight"
      : bmi < 30
      ? "Overweight"
      : "Obese";

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h2 className="profile-name">
          {user.name}
        </h2>

        <p className="profile-email">
          {user.email}
        </p>

        <div className="profile-details">

          <div className="detail-box">
            <h4>Age</h4>
            <p>{age} Years</p>
          </div>

          <div className="detail-box">
            <h4>Height</h4>
            <p>{height} cm</p>
          </div>

          <div className="detail-box">
            <h4>Weight</h4>
            <p>{weight} kg</p>
          </div>

          <div className="detail-box">
            <h4>BMI</h4>
            <p>{bmi}</p>
          </div>

        </div>

        <h3 className="profile-stats-title">
          Health Status
        </h3>

        <div className="detail-box">
          <h4>BMI Category</h4>
          <p>{bmiStatus}</p>
        </div>

      </div>
    </div>
  );
}

export default Profile;