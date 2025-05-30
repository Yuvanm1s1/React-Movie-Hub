import React from "react";
import MovieCard from "../assets/components/MovieComponent";
import "../assets/css/Favorites.css";

function Favourite({ favorites }) {
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h1 className="favorites-title">Your Favorites</h1>
        <p className="favorites-message">
          You haven't added any movies to your favorites yet.
        </p>
        <p className="favorites-instruction">
          Go to the Home page to add movies to your favorites.
        </p>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Your Favorites</h1>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favourite;
