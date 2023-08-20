import React from 'react';
import Portfolio from './Portfolio';
import './work.css';

const Work = () => {
  return (
    <section className="work section" id="work">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My projects</span>

        <Portfolio />
    </section>
  )
}

export default Work