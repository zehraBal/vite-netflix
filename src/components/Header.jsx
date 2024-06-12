import React from "react";
import { useHistory } from "react-router-dom";

export default function Header({ isLoggedIn }) {
  const history = useHistory();

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
      {!isLoggedIn && (
        <div className="headerButton-container">
          <button className="headerButton" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
