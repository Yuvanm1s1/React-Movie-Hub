import React, {  useEffect } from 'react'
import MovieCard from '../assets/components/MovieComponent';
import { useState } from 'react';
import '../assets/css/Home.css'; 
import { getPopularMovies,searchMovies } from '../services/api';
function Home({ addFavorite }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //if any of the values in the dependency array changes, the useEffect will run again
    // //useEffect is used to perform side effects in functional components, like fetching data that are asynchronous operations
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Failed to fetch popular movies:", error);
                setError("Failed to fetch popular movies. Please try again later.");
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);
    const handleSearch =async (e) =>{
        e.preventDefault();
        if (!searchQuery.trim()) return
        if(loading) return; // Prevent multiple submissions while loading
        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null); // Clear any previous errors
        }catch(err){
            console.error("Failed to search movies:", err);
            setError("Failed to search movies. Please try again later.");
        }finally{
            setLoading(false);
        }
    }
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} addFavorite={addFavorite} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;