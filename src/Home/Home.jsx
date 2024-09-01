import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home-Container">
      <div className="logo-welcome-container">
        <div className="logo">logo</div>
        <div className="welcome">welcome</div>
      </div>
      <div className="bio-profile-macrame-container">
        <div className="bio">bio</div>
        <div className="profile-macrame-container">
          <div className="profile">profile</div>
          <div className="macrame">macrame</div>
        </div>
      </div>
    </div>
  );
}
