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

  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("workouts")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !workoutName ||
      !duration ||
      !calories
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...workouts];

      updated[editIndex] = {
        workoutName,
        duration,
        calories,
      };

      setWorkouts(updated);

      localStorage.setItem(
        "workouts",
        JSON.stringify(updated)
      );

      setEditIndex(null);
    } else {
      const newWorkout = {
        workoutName,
        duration,
        calories,
      };

      const updated = [
        ...workouts,
        newWorkout,
      ];

      setWorkouts(updated);

      localStorage.setItem(
        "workouts",
        JSON.stringify(updated)
      );
    }

    setWorkoutName("");
    setDuration("");
    setCalories("");
  };

  const handleEdit = (index) => {
    setWorkoutName(
      workouts[index].workoutName
    );

    setDuration(
      workouts[index].duration
    );

    setCalories(
      workouts[index].calories
    );

    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = workouts.filter(
      (_, i) => i !== index
    );

    setWorkouts(updated);

    localStorage.setItem(
      "workouts",
      JSON.stringify(updated)
    );
  };

  const filtered = workouts.filter(
    (workout) =>
      workout.workoutName
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="form-container">
      <div className="form-card">

        <h2>Workout Tracker</h2>

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
            required
          />

          <input
            type="number"
            placeholder="Duration (min)"
            value={duration}
            onChange={(e) =>
              setDuration(
                e.target.value
              )
            }
            required
          />

          <input
            type="number"
            placeholder="Calories Burned"
            value={calories}
            onChange={(e) =>
              setCalories(
                e.target.value
              )
            }
            required
          />

          <button type="submit">
            {editIndex !== null
              ? "Update Workout"
              : "Add Workout"}
          </button>

        </form>

        <input
          className="search-box"
          type="text"
          placeholder="Search Workout"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
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
                  {workout.workoutName}
                </h4>

                <p>
                  Duration:
                  {workout.duration} min
                </p>

                <p>
                  Calories:
                  {workout.calories}
                </p>
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
          )
        )}
      </div>
    </div>
  );
}

export default Workouts;