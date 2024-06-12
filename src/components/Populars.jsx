import { useEffect, useState } from "react";
import { userSuggestionsData } from "/src/userSuggestionsData.js";
import Suggestion from "./Suggestion";

export default function Populars(props) {
  const { activeProfile } = props;
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const userSuggestion = userSuggestionsData[activeProfile.id];
    setSuggestions(userSuggestion);
  }, [activeProfile]);
  return (
    <>
      {suggestions.map((suggestion, index) => {
        return <Suggestion key={index} suggestion={suggestion} />;
      })}
    </>
  );
}
