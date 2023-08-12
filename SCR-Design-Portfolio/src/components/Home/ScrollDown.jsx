import React from 'react';
import './ScrollDown.css';

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button-flex"></a>
        <img src={require("../../assets/arrow.png")} alt="Scroll down arrow" />
    </div>
  )
}

export default ScrollDown