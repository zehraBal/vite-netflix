import Movie from "./Movie";

export default function Movies(props) {
  const { movies } = props;
  return (
    <div className="movies-container">
      {movies.map((movie) => {
        return <Movie key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
