import React from "react"; //jsx가 인식하기 위한 장치
import axios from "axios";
import PropTypes from "prop-types"; 

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    try {
      const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
      console.log(movies);
    } catch (error) {
      console.error(error);
    } 

  }
  componentDidMount(){
    this.getMovies();
  }
  render(){       
      const { isLoading } = this.state;     
      
      return <div>
                {isLoading ? "Loading...": "We are ready"}                        
             </div>;
    }
}

export default App;
