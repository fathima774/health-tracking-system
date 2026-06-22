import React, { useEffect, useState } from "react";
import "../assets/styles/profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser =
      JSON.parse(localStorage.getItem("loggedInUser"));

    setUser(currentUser);
  }, []);

  if (!user) {
    return (
      <div className="profile-container">
        <h2>No User Logged In</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <div className="profile-details">

          <div className="detail-box">
            <h4>Age</h4>
            <p>22</p>
          </div>

          <div className="detail-box">
            <h4>Height</h4>
            <p>170 cm</p>
          </div>

          <div className="detail-box">
            <h4>Weight</h4>
            <p>75 kg</p>
          </div>

          <div className="detail-box">
            <h4>BMI</h4>
            <p>25.9</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;