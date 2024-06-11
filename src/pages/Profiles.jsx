import { useState } from "react";
import { profilesData } from "/src/profilesData";
import Profile from "../components/Profile";
export default function Profiles(props) {
  const { setActiveProfile } = props;
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <div className="profiles-container">
      <div>
        <h1>Who's watching?</h1>
      </div>
      <div className="profiles">
        {" "}
        {profiles.map((profile, index) => {
          return (
            <Profile
              key={index}
              profile={profile}
              setActiveProfile={setActiveProfile}
            />
          );
        })}
      </div>
    </div>
  );
}
