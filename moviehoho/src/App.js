import React from "react"; //jsx가 인식하기 위한 장치
import axios from "axios";
import Movie from "./Movie"
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    try {
      const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      console.log(movies);
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

    return <div>
      {isLoading ? "Loading..." : movies.map(movie => {
        console.log(movie);
        return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
      })}</div>;
  }
}

export default App;
