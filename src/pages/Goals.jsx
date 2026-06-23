import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/styles/form.css";

function Goals() {
  const [goalName, setGoalName] = useState("");
  const [target, setTarget] = useState("");
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem("goals")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...goals];

      updated[editIndex] = {
        goalName,
        target,
      };

      setGoals(updated);

      localStorage.setItem(
        "goals",
        JSON.stringify(updated)
      );

      setEditIndex(null);
    } else {
      const newGoal = {
        goalName,
        target,
      };

      const updated = [...goals, newGoal];

      setGoals(updated);

      localStorage.setItem(
        "goals",
        JSON.stringify(updated)
      );
    }

    setGoalName("");
    setTarget("");
  };

  const handleEdit = (index) => {
    setGoalName(goals[index].goalName);
    setTarget(goals[index].target);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = goals.filter(
      (_, i) => i !== index
    );

    setGoals(updated);

    localStorage.setItem(
      "goals",
      JSON.stringify(updated)
    );
  };

  const filtered = goals.filter((goal) =>
    goal.goalName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="form-container">
      <div className="form-card">

        <h2>Goals</h2>

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
            placeholder="Target (kg)"
            value={target}
            onChange={(e) =>
              setTarget(e.target.value)
            }
            required
          />

          <button type="submit">
            {editIndex !== null
              ? "Update Goal"
              : "Add Goal"}
          </button>
        </form>

        <input
          className="search-box"
          type="text"
          placeholder="Search Goal"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {filtered.map((goal, index) => (
          <div key={index} className="record-card">

            <div className="record-info">
              <h4>{goal.goalName}</h4>
              <p>Target: {goal.target}</p>
            </div>

            <div className="record-actions">
              <button
                className="action-btn edit-btn"
                onClick={() =>
                  handleEdit(index)
                }
              >
                <FaEdit />
              </button>

              <button
                className="action-btn delete-btn"
                onClick={() =>
                  handleDelete(index)
                }
              >
                <FaTrash />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;