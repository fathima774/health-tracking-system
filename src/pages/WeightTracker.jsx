import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/styles/form.css";

function WeightTracker() {
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [weights, setWeights] = useState(
    JSON.parse(localStorage.getItem("weights")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!weight || !date) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...weights];

      updated[editIndex] = {
        weight,
        date,
      };

      setWeights(updated);

      localStorage.setItem(
        "weights",
        JSON.stringify(updated)
      );

      setEditIndex(null);
    } else {
      const newWeight = {
        weight,
        date,
      };

      const updated = [...weights, newWeight];

      setWeights(updated);

      localStorage.setItem(
        "weights",
        JSON.stringify(updated)
      );
    }

    setWeight("");
    setDate("");
  };

  const handleEdit = (index) => {
    setWeight(weights[index].weight);
    setDate(weights[index].date);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = weights.filter(
      (_, i) => i !== index
    );

    setWeights(updated);

    localStorage.setItem(
      "weights",
      JSON.stringify(updated)
    );
  };

  const filtered = weights.filter((item) =>
    item.weight.toString().includes(search)
  );

  return (
    <div className="form-container">
      <div className="form-card">

        <h2>Weight Tracker</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            required
          />

          <button type="submit">
            {editIndex !== null
              ? "Update Weight"
              : "Add Weight"}
          </button>

        </form>

        <input
          className="search-box"
          type="text"
          placeholder="Search Weight"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {filtered.map((item, index) => (
          <div
            key={index}
            className="record-card"
          >
            <div className="record-info">
              <h4>{item.weight} kg</h4>
              <p>{item.date}</p>
            </div>

            <div className="record-actions">
              <button
                type="button"
                className="action-btn edit-btn"
                onClick={() =>
                  handleEdit(index)
                }
              >
                <FaEdit />
              </button>

              <button
                type="button"
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

export default WeightTracker;