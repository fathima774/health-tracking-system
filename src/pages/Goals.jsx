import React, { useState } from "react";

function Goals() {
  const [goalName, setGoalName] = useState("");
  const [target, setTarget] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      goalName,
      target,
      progress,
    };

    const existingGoals =
      JSON.parse(localStorage.getItem("goals")) || [];

    const updatedGoals = [
      ...existingGoals,
      newGoal,
    ];

    localStorage.setItem(
      "goals",
      JSON.stringify(updatedGoals)
    );

    alert("Goal Added!");

    setGoalName("");
    setTarget("");
    setProgress("");
  };

  return (
    <div>
      <h2>Create Goal</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) =>
            setGoalName(e.target.value)
          }
          required
        />

        <input
          type="number"
          placeholder="Target Value"
          value={target}
          onChange={(e) =>
            setTarget(e.target.value)
          }
          required
        />

        <input
          type="number"
          placeholder="Current Progress (%)"
          value={progress}
          onChange={(e) =>
            setProgress(e.target.value)
          }
          required
        />

        <button type="submit">
          Save Goal
        </button>
      </form>
    </div>
  );
}

export default Goals;