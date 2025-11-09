import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api/tmdb";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading movies...</p>;
  if (error) return <p className="text-center mt-10 text-red-400">{error}</p>;

  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl font-bold mb-8">🔥 Trending Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-xl p-2 hover:scale-105 transition-transform"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg"
            />
            <h3 className="mt-2 text-center text-sm font-semibold">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
