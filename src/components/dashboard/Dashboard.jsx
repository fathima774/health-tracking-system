import React, { useEffect, useState } from "react";

import SummaryCard from "./SummaryCard";
import WeightChart from "./WeightChart";
import WorkoutChart from "./WorkoutChart";
import GoalChart from "./GoalChart";

import Navbar from "../layouts/Navbar";

function Dashboard() {
  const [weights, setWeights] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedWeights =
      JSON.parse(localStorage.getItem("weights")) || [];

    const storedWorkouts =
      JSON.parse(localStorage.getItem("workouts")) || [];

    const storedGoals =
      JSON.parse(localStorage.getItem("goals")) || [];

    setWeights(storedWeights);
    setWorkouts(storedWorkouts);
    setGoals(storedGoals);
  }, []);

  const currentWeight =
    weights.length > 0
      ? weights[weights.length - 1].weight
      : 0;

  const totalWorkouts = workouts.length;

  const caloriesBurned = workouts.reduce(
    (sum, workout) =>
      sum + Number(workout.calories || 0),
    0
  );

  const activeGoals = goals.length;

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <SummaryCard
          title="Current Weight"
          value={`${currentWeight} kg`}
          icon="⚖️"
          color="#00B894"
        />

        <SummaryCard
          title="Total Workouts"
          value={totalWorkouts}
          icon="🏋️"
          color="#0984E3"
        />

        <SummaryCard
          title="Calories Burned"
          value={caloriesBurned}
          icon="🔥"
          color="#FDCB6E"
        />

        <SummaryCard
          title="Active Goals"
          value={activeGoals}
          icon="🎯"
          color="#6C5CE7"
        />
      </div>

      <WeightChart data={weights} />

      <WorkoutChart data={workouts} />

      <GoalChart data={goals} />
    </>
  );
}

export default Dashboard;