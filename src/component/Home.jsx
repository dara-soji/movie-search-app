import React, {useState, useEffect} from 'react'
import './Home.scss'
import axios from 'axios';


const Home = () => {

  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState([])
  const [movies, setMovies] = useState(["superman", "spiderman", "ghost", "space", "comet", "daddy"])

  useEffect(() => {
      // 
      async function fetchData(movie) {
          
          const request = await axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=c1278629`) 
          
          setCategories(oldCat =>[...oldCat, request.data]);
          
        }
        movies.map(fetchData)
        
      }, [movies])
      

      const films = categories.filter(film => {
        if (query === '') {
            return film;
        } 
        else if (film.Title.toLowerCase().includes(query.toLowerCase())) {
            return film;
        }
       
        })
        const mediaMatch = window.matchMedia('(max-width: 320px)');
        const media320 = mediaMatch.matches

        
        const style = {
           
            width: `${media320? `${213 * movies.length}px` : `${313 * movies.length}px`}`,
          
        }


  return (
    <div className='home'>
      <nav className="nav-bar">
        <h2 className="navbar-text">MyTestApp</h2>

      </nav>
      <header className="home_header">
        <h1 className="home_header-heading">Watch something incredible</h1>
      </header>
      <div className="home_movie">
          <div className="home_movie-search">
           
              <label>Search</label>
          <input type="text"  className="isearch" onChange={event => setQuery(event.target.value)} />
            

          </div>
          <div className="home_movie-categories">
            {['Action', 'Comedy'].map((item, index) => (
              <div className="home_movie-categories-cat " key={`category-${index}`}>
                <p className="category-name">{item}</p>
                <div className="home_movie-cat-scroll-cover">
                <div className="home_movie-categories-cat-movies" style={style}>
                {films.map((category, index)  =>(
                  <div className="categories-cat-movie home_flex" key={`movie-${index}`} style={{backgroundImage: `url(${category.Poster})`}}>
                    <p className="movie-name">{category.Title}</p>
                  </div>
                ))}
                </div>
                </div>
              </div>
            ))}
              
          </div>
      </div>
    </div>
  )
}

export default Home
