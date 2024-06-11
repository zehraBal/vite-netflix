import { useState } from "react";
import { profilesData } from "/src/profilesData";
import Profile from "../components/Profile";
export default function Profiles({ setActiveProfile }) {
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <div className="profiles-container">
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
  );
}
