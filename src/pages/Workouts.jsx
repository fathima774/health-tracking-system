import React, { useState } from "react";

function Workouts() {
  const [workoutName, setWorkoutName] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkout = {
      workoutName,
      duration,
      calories,
      date,
    };

    const existingWorkouts =
      JSON.parse(localStorage.getItem("workouts")) || [];

    const updatedWorkouts = [
      ...existingWorkouts,
      newWorkout,
    ];

    localStorage.setItem(
      "workouts",
      JSON.stringify(updatedWorkouts)
    );

    alert("Workout Added!");

    setWorkoutName("");
    setDuration("");
    setCalories("");
    setDate("");
  };

  return (
    <div>
      <h2>Add Workout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          onChange={(e) =>
            setWorkoutName(e.target.value)
          }
          required
        />

        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
          required
        />

        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) =>
            setCalories(e.target.value)
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
          Add Workout
        </button>
      </form>
    </div>
  );
}

export default Workouts;