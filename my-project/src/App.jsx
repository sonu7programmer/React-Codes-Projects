import { useState, useEffect } from "react";
import MovieCard from "./MovieCard"; // 👈 import new component

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_TMDB_API_KEY
}`;

const API_DISCOVER = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_TMDB_API_KEY
}`;

const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${
  import.meta.env.VITE_TMDB_API_KEY
}&query=`;


export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
  const fetchMovies = async () => {
    try {
      const url = searchTerm
        ? `${API_SEARCH}${encodeURIComponent(searchTerm)}`
        : API_DISCOVER;

      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  fetchMovies();
}, [searchTerm]);


  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">🎬 CineScope</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

{/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
  {movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div> */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
  {movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>



    </div>
  );
}
