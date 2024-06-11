import { useHistory } from "react-router-dom";
export default function Header() {
  const history = useHistory();
  /* const handleClick = (e) => {
    const { name } = e.target;
    if (name === "signIn") {
      history.push("/login");
    } else if (name === "signUp") {
      history.push("/signUp");
    }
  };*/
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <div className="header">
      <img src="/src/assets/Netflix_Logo_RGB.png" alt="logo" />
      <div className="headerButton-container">
        <button className="headerButton" onClick={handleLogin}>
          Sign In
        </button>
        <button className="headerButton">Get Started</button>
      </div>
    </div>
  );
}
