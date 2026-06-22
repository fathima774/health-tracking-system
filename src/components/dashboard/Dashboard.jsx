import React, { useEffect, useState } from "react";

import Navbar from "../layouts/Navbar";

import SummaryCard from "./SummaryCard";
import WeightChart from "./WeightChart";
import WorkoutChart from "./WorkoutChart";
import GoalChart from "./GoalChart";
import DashboardStats from "./DashboardStats";

import "../../assets/styles/dashboard.css";

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

  // Current Weight
  const currentWeight =
    weights.length > 0
      ? weights[weights.length - 1].weight
      : 0;

  // Total Workouts
  const totalWorkouts = workouts.length;

  // Calories Burned
  const caloriesBurned = workouts.reduce(
    (total, workout) =>
      total + Number(workout.calories || 0),
    0
  );

  // Active Goals
  const activeGoals = goals.length;

  // Goal Chart Data
  const goalData = goals.map((goal) => ({
    goalName: goal.goalName,
    progress: Number(goal.target),
  }));

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        {/* Welcome Section */}
        <div className="welcome-section">
          <h1>Welcome Back 👋</h1>

          <p>
            Track your fitness progress and stay healthy
            with VitalSync.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="summary-section">

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

        {/* Weight & Workout Charts */}
        <div className="chart-row">

          <div className="chart-container">
            <WeightChart data={weights} />
          </div>

          <div className="chart-container">
            <WorkoutChart data={workouts} />
          </div>

        </div>

        {/* Goal Progress Chart */}
        <div className="goal-section">

          <div className="chart-container">
            <GoalChart data={goalData} />
          </div>

        </div>

        {/* Dashboard Statistics */}
        <div className="stats-section">

          <DashboardStats
            totalWorkouts={totalWorkouts}
            activeGoals={activeGoals}
            caloriesBurned={caloriesBurned}
            currentWeight={currentWeight}
          />

        </div>

      </div>
    </>
  );
}

export default Dashboard;