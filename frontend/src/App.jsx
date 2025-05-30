import './assets/css/App.css'
import MovieCard from './assets/components/MovieComponent'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourite'
import NavBar from './assets/components/NavBar'
import { useState } from 'react'
function App() {
  // const movienum = 1; // Change this to 0 or 1 to test the conditional rendering
   const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };
  return (
    <>
    <div>
      <NavBar/>
    {/*
    {movienum === 1 && <MovieCard movie={{
    title: "Interstellar",
    release_date: "2014-11-07",
    url: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg"
  }} />} */}
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home addFavorite={addFavorite}/>} />
        <Route path='/favourites' element={<Favourite favorites={favorites}/>} />
      </Routes>
    </main>
    </div>
    
    </>
  )
}

export default App
