const API_KEY = "f66f55c7524ff388081483b5671845b1"
const BASE_URL = "https://api.themoviedb.org"
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}