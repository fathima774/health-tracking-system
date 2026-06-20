import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const WorkoutChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Workout Activity</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="workoutName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="calories"
            fill="#0984E3"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkoutChart;