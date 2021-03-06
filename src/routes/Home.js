import React from "react"; //jsx가 인식하기 위한 장치
import axios from "axios";
import Movie from "../component/Movie"
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    try {
      const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")      
      this.setState({ movies: movies, isLoading: false })

    } catch (error) {
      console.error(error);
    }

  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
          {isLoading 
          ? (<div className="loader">
            <span className="lader__text">Loading...</span>
          </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (                            
                <Movie 
                  key={movie.id} 
                  id={movie.id}
                  year={movie.year} 
                  title={movie.title}  
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />                
              ))}
            </div>
             )
          }           
      </section>
      
    )
      
  }
}

export default Home;
