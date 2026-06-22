import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/styles/form.css";

function WeightTracker() {
  const [weight, setWeight] =
    useState("");

  const [date, setDate] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [editIndex, setEditIndex] =
    useState(null);

  const [records, setRecords] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "weights"
        )
      ) || []
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      weight,
      date,
    };

    let updated;

    if (editIndex !== null) {
      updated = [...records];
      updated[editIndex] =
        newRecord;

      setEditIndex(null);
    } else {
      updated = [
        ...records,
        newRecord,
      ];
    }

    setRecords(updated);

    localStorage.setItem(
      "weights",
      JSON.stringify(updated)
    );

    setWeight("");
    setDate("");
  };

  const handleEdit = (index) => {
    setWeight(
      records[index].weight
    );

    setDate(
      records[index].date
    );

    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated =
      records.filter(
        (_, i) => i !== index
      );

    setRecords(updated);

    localStorage.setItem(
      "weights",
      JSON.stringify(updated)
    );
  };

  const filtered =
    records.filter((item) =>
      item.date.includes(
        search
      )
    );

  return (
    <div className="form-container">
      <div className="form-card">

        <h2>Weight Tracker</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) =>
              setWeight(
                e.target.value
              )
            }
          />

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(
                e.target.value
              )
            }
          />

          <button type="submit">
            {editIndex !== null
              ? "Update Weight"
              : "Add Weight"}
          </button>

        </form>

        <input
          className="search-box"
          placeholder="Search Date"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {filtered.map(
          (item, index) => (
            <div
              key={index}
              className="record-card"
            >
              <div className="record-info">
                <h4>
                  {item.weight} kg
                </h4>

                <p>
                  {item.date}
                </p>
              </div>

              <div className="record-actions">
                <button
                  className="action-btn edit-btn"
                  onClick={() =>
                    handleEdit(
                      index
                    )
                  }
                >
                  <FaEdit />
                </button>

                <button
                  className="action-btn delete-btn"
                  onClick={() =>
                    handleDelete(
                      index
                    )
                  }
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default WeightTracker;