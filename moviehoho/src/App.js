import React from "react"; //jsx가 인식하기 위한 장치

const myColor =[
  {
    id:1,
    name: "Red",
    image: 
        "https://images.pexels.com/photos/1789970/pexels-photo-1789970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:2,
    name: "Yellow",
    image: 
        "https://images.pexels.com/photos/5325845/pexels-photo-5325845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:3,
    name: "Green",
    image: 
        "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:4,
    name: "Blue",
    image: 
        "https://images.pexels.com/photos/3530402/pexels-photo-3530402.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    id:5,
    name: "Purple",
    image: 
        "https://images.pexels.com/photos/2524952/pexels-photo-2524952.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  }

]


function ColorList({name, image }){
  return ( <div align="center">
              <h2>It's {name}</h2>
              <img alt={name} src={image} width="300"/>
          </div>
          )
}
// function renderColor(color){
//   console.log(color.name, color.image);
//   return <ColorList name={color.name} image={color.image} />
// }

function App() {
  return (
          <div>
            {myColor.map(color =>(
            <ColorList key={color.id} name={color.name} image={color.image} />
            ))
            }
          </div>
        );
     
}

export default App;
