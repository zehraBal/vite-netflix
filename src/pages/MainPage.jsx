import Header from "../components/Header";

export default function MainPage() {
  return (
    <div className="mainPage-container">
      <div className="main-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime. </h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="mainInputField">
          <input className="main-input" type="text" placeholder="Email" />
          <button className="headerButton">Get Started {">"}</button>
        </div>
      </div>
    </div>
  );
}
