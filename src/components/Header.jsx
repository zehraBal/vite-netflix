import { useHistory } from "react-router-dom";
export default function Header() {
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
      <div className="headerButton-container">
        <button className="headerButton" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
