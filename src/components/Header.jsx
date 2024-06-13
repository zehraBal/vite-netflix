import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Header({ activeProfile }) {
  const history = useHistory();
  const location = useLocation();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div className="header">
      <img
        src="/src/assets/Netflix_Logo_RGB.png"
        alt="logo"
        onClick={() => {
          history.push("/");
        }}
      />
      {location.pathname !== "/home" && location.pathname !== "/profiles" && (
        <div className="headerButton-container">
          <button className="headerButton" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      )}
      {location.pathname === "/home" && activeProfile && (
        <div className="loggedInUser">
          <div>
            <h3>Hi,{activeProfile.name}!</h3>
          </div>
          <div className="profile-container">
            <img
              className="profile-avatar"
              src={activeProfile.avatar}
              alt={activeProfile.name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
