import React from 'react';
import './scrollup.css';

const ScrollUp = () => {
    window.addEventListener ("scroll", function(){
        const scrollup = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollup.classList.add ("show-scroll");
        else scrollup.classList.remove("show-scroll");
    });
  return (
    <a href="#" className="scrollup">
        <i class="uil uil-angle-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp