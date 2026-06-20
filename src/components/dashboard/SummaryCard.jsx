import React from "react";
import "../../assets/styles/summary.css";

const SummaryCard = ({ title, value, icon, color }) => {
  return (
    <div
      className="summary-card"
      style={{ borderLeft: `5px solid ${color}` }}
    >
      <div className="card-icon">{icon}</div>

      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default SummaryCard;