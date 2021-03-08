import React from "react"; //jsx가 인식하기 위한 장치
import PropTypes from "prop-types"; 

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render(){       
      const { isLoading } = this.state;
      return <div>
                {isLoading ? "Loading...": "We are ready"}                        
             </div>;
    }
}

export default App;
