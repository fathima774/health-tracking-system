import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../assets/styles/goalchart.css";

const GoalChart = () => {
  const data = [
    {
      goal: "Lose Weight",
      progress: 60,
    },
    {
      goal: "Run 5km",
      progress: 80,
    },
    {
      goal: "Gain Muscle",
      progress: 40,
    },
  ];

  return (
    <div className="goal-chart-container">
      <h2>Goal Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="goal" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" fill="#00B894" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GoalChart;