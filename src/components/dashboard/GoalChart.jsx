import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function GoalChart({ data }) {
  return (
    <div className="chart-card">
      <h2>🎯 Goal Progress</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="goalName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="progress"
            fill="#00B894"
            stroke="#00B894"
            radius={[10, 10, 0, 0]}
            barSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GoalChart;