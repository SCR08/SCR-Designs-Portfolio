import React from 'react'

const PortfolioItems = ({item}) => {
  return (
    <div className="portfolio__card" key = {item.id}>
        <img src={item.image} alt="" className='portolio__img' />
        <h3 className="portfoliio__title">{item.title}</h3>
        <a href="#" className="portfolio__button">
            More Info <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default PortfolioItems   