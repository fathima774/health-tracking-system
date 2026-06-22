import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../assets/styles/form.css";

function Workouts() {
  const [workoutName, setWorkoutName] =
    useState("");

  const [duration, setDuration] =
    useState("");

  const [calories, setCalories] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [editIndex, setEditIndex] =
    useState(null);

  const [workouts, setWorkouts] =
    useState(
      JSON.parse(
        localStorage.getItem("workouts")
      ) || []
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    const workout = {
      workoutName,
      duration,
      calories,
    };

    let updated;

    if (editIndex !== null) {
      updated = [...workouts];
      updated[editIndex] = workout;
      setEditIndex(null);
    } else {
      updated = [...workouts, workout];
    }

    setWorkouts(updated);

    localStorage.setItem(
      "workouts",
      JSON.stringify(updated)
    );

    setWorkoutName("");
    setDuration("");
    setCalories("");
  };

  const handleEdit = (index) => {
    const workout = workouts[index];

    setWorkoutName(
      workout.workoutName
    );

    setDuration(
      workout.duration
    );

    setCalories(
      workout.calories
    );

    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated =
      workouts.filter(
        (_, i) => i !== index
      );

    setWorkouts(updated);

    localStorage.setItem(
      "workouts",
      JSON.stringify(updated)
    );
  };

  const filtered =
    workouts.filter((item) =>
      item.workoutName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="form-container">
      <div className="form-card">

        <h2>Workouts</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Workout Name"
            value={workoutName}
            onChange={(e) =>
              setWorkoutName(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="Duration"
            value={duration}
            onChange={(e) =>
              setDuration(
                e.target.value
              )
            }
          />

          <input
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={(e) =>
              setCalories(
                e.target.value
              )
            }
          />

          <button type="submit">
            {editIndex !== null
              ? "Update Workout"
              : "Add Workout"}
          </button>

        </form>

        <input
          className="search-box"
          placeholder="Search Workout"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {filtered.map(
          (workout, index) => (
            <div
              key={index}
              className="record-card"
            >
              <div className="record-info">
                <h4>
                  {
                    workout.workoutName
                  }
                </h4>

                <p>
                  Duration:
                  {
                    workout.duration
                  }
                </p>

                <p>
                  Calories:
                  {
                    workout.calories
                  }
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

export default Workouts;