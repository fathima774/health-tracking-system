import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const GoalChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Goal Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="goalName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="progress"
            fill="#00B894"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GoalChart;