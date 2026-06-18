import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "../../assets/styles/weightchart.css";

const WeightChart = () => {
  const data = [
    {
      date: "Jan 1",
      weight: 80,
    },
    {
      date: "Jan 15",
      weight: 78,
    },
    {
      date: "Feb 1",
      weight: 76,
    },
    {
      date: "Feb 15",
      weight: 75,
    },
    {
      date: "Mar 1",
      weight: 74,
    },
  ];

  return (
    <div className="weight-chart-container">
      <h2>Weight Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="weight"
            stroke="#00B894"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;