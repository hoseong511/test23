import React from "react"; //jsx가 인식하기 위한 장치
import PropTypes from "prop-types"; 

const myColor =[
  {
    id:1,
    name: "Red",
    rating: 4.8,
    image: 
        "https://images.pexels.com/photos/1789970/pexels-photo-1789970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:2,
    name: "Yellow",
    rating: 4.5,
    image: 
        "https://images.pexels.com/photos/5325845/pexels-photo-5325845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:3,
    name: "Green",
    rating: 5.0,
    image: 
        "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:4,
    name: "Blue",
    rating: 4.7,
    image: 
        "https://images.pexels.com/photos/3530402/pexels-photo-3530402.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:5,
    name: "Purple",
    rating: 4.5,
    image: 
        "https://images.pexels.com/photos/2524952/pexels-photo-2524952.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }

]


function ColorList({name, image, rating }){
  return ( <div align="center">
              <h2>It's {name}</h2>
              <h4>{rating} / 5.0</h4>
              <img alt={name} src={image} width="300"/>
          </div>
          )
}
// function renderColor(color){
//   console.log(color.name, color.image);
//   return <ColorList name={color.name} image={color.image} />
// }
ColorList.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
          <div>
            {myColor.map(color =>(
            <ColorList key={color.id} name={color.name} image={color.image} rating={color.rating}/>
            ))
            }
          </div>
        );
     
}

export default App;
