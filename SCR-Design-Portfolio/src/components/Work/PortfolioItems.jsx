import React from 'react'

const PortfolioItems = ({item}) => {
  return (
    <a href={item.url} className="portfolio__card" target="_blank" rel="noopener noreferrer" key={item.id}>
      <img src={item.image} alt="" className="portfolio__img" />
      <h3 className="portfolio__title">{item.title}</h3>
      <div className="portfolio__button">
        More Info <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
      </div>
    </a>
  )
}

export default PortfolioItems