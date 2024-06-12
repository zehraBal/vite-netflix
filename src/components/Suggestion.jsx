import { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";

export default function Suggestion(props) {
  const [movies, setMovies] = useState([]);
  const { suggestion } = props;
  const { title, category } = suggestion;
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://movies-api14.p.rapidapi.com/movies",
      headers: {
        "x-rapidapi-key": "95ec85188amsh54a662dc270dd7ep17c336jsnfd8f82d872cf",
        "x-rapidapi-host": "movies-api14.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.movies.slice(0, 5));
      })
      .catch((err) => console.warn(err));
  }, [category]);
  return (
    <div className="suggestions-container">
      <h2>{title}</h2>
      <Movies movies={movies} />
    </div>
  );
}
