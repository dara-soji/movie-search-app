import React, {useState, useEffect} from 'react'
import './Home.scss'
import axios from 'axios';


const Home = () => {

  const [query, setQuery] = useState([])
  const [categories, setCategories] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
      
      async function fetchData(token) {
          
          const request = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=af3e57b8') 
          console.log(request);
          
          setMovies(request);
          
        }
        fetchData()
        
  }, [])
  

  return (
    <div className='home'>
      <nav className="nav-bar">
        <h2 className="navbar-text">My Test App</h2>

      </nav>
      <header className="home_header">
        <h1 className="home_header-heading">Watch<br/> something <br/> incredible</h1>
      </header>
      <div className="home_movie">
          <div className="home_movie-search">
            <div className="home_movie-search-bar">
              <label>Search</label>
          <input type="text"  class="isearch" onChange={event => setQuery(event.target.value)} />
            </div>

          </div>
          <div className="home_movie-categories">
            {categories?.map((category, index) => (
              <div className="home_movie-categories-cat" key={`category-${index}`}>
                <p className="category-name">{category.name}</p>
                {movies?.map((movie, index) => (
                  <div className="home_movie-categories-cat-movie" key={`movie-${index}`}>
                    <p className="movie-name">{movie.name}</p>
                  </div>
                ))}
              </div>
            ))}
              
          </div>
      </div>
    </div>
  )
}

export default Home
