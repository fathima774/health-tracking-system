import React, { useEffect, useState } from "react";

function DashboardStats() {
  const [bmi, setBMI] = useState(0);
  const [workoutStreak, setWorkoutStreak] = useState(0);
  const [weightLost, setWeightLost] = useState(0);
  const [badges, setBadges] = useState(0);

  useEffect(() => {
    const weights =
      JSON.parse(localStorage.getItem("weights")) || [];

    const workouts =
      JSON.parse(localStorage.getItem("workouts")) || [];

    // Weight Lost Calculation
    if (weights.length >= 2) {
      const firstWeight = Number(weights[0].weight);
      const latestWeight = Number(
        weights[weights.length - 1].weight
      );

      setWeightLost(firstWeight - latestWeight);
    }

    // Sample BMI Calculation
    const latestWeight =
      weights.length > 0
        ? Number(weights[weights.length - 1].weight)
        : 0;

    const height = 1.75; // Example Height in meters

    if (latestWeight > 0) {
      const calculatedBMI =
        latestWeight / (height * height);

      setBMI(calculatedBMI.toFixed(1));
    }

    // Workout Count
    setWorkoutStreak(workouts.length);

    // Achievement Badges
    if (workouts.length >= 1) {
      setBadges(1);
    }

    if (workouts.length >= 10) {
      setBadges(2);
    }

    if (workouts.length >= 25) {
      setBadges(3);
    }

    if (workouts.length >= 50) {
      setBadges(4);
    }
  }, []);

  return (
    <div className="stats-grid">

      <div className="stat-card">
        <h3>BMI</h3>
        <p>{bmi}</p>
      </div>

      <div className="stat-card">
        <h3>Workout Count</h3>
        <p>{workoutStreak}</p>
      </div>

      <div className="stat-card">
        <h3>Weight Lost</h3>
        <p>{weightLost} kg</p>
      </div>

      <div className="stat-card">
        <h3>Achievements</h3>
        <p>{badges} 🏅</p>
      </div>

    </div>
  );
}

export default DashboardStats;