// export default function MovieCard({ movie }) {
//   const imageBase = "https://image.tmdb.org/t/p/w500";
//   return (
//     <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//       <img
//         src={
//           movie.poster_path
//             ? `${imageBase}${movie.poster_path}`
//             : "https://via.placeholder.com/500x750?text=No+Image"
//         }
//         alt={movie.title}
//         className="w-full h-80 object-cover"
//       />
//       <div className="p-3">
//         <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
//         <p className="text-sm text-gray-400">
//           ⭐ {movie.vote_average.toFixed(1)} | {movie.release_date?.slice(0, 4)}
//         </p>
//       </div>
//     </div>
//   );
// }



export default function MovieCard({ movie }) {
  const imageBase = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="relative bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
      <img
        src={
          movie.poster_path
            ? `${imageBase}${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={movie.title}
        className="w-full h-80 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
      />

      {/* Overlay glow */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-70"></div>

      <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-gray-950/90 to-transparent">
        <h3 className="text-lg font-bold text-purple-400 drop-shadow-md truncate">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-300 mt-1">
          ⭐ {movie.vote_average?.toFixed(1)} | {movie.release_date?.slice(0, 4)}
        </p>
      </div>
    </div>
  );
}
