import Profiles from "./Profiles";

export default function Welcome({ setActiveProfile }) {
  return (
    <div>
      <h1>Whos's watching?</h1>
      <Profiles setActiveProfile={setActiveProfile} />
      <div className="welcome-button">Manage Profiles</div>
    </div>
  );
}
