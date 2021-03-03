import React from "react"; //jsx가 인식하기 위한 장치

function Potato({ fav }){
  return ( <h3>I love {fav}</h3>)
}

function App() {
  return (
          <div>
            <h1>
              Hello!!!
            </h1>
            <Potato fav="hoho"/>
            <Potato fav="juice"/>
            <Potato fav="book"/>
            <Potato fav="music"/>

          </div>
        );
     
}

export default App;
