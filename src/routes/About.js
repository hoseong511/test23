import React from "react";
import "./About.css"

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span >About this page: I built it because to practice React!!</span>
            <br />
            <div className="about__me">
                <a href="https://github.com/hoseong511">hoseong511</a>
                <br></br>
                <a href="https://github.com/hoseong511/moviehoho">DOC</a>
            </div>
        </div>
    )
}

export default About;