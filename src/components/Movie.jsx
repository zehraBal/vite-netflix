export default function Movie({ movie }) {
  return (
    <div className="movie-container">
      <img src={movie.poster_path} />
    </div>
  );
}
