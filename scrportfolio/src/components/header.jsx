import React from 'react'
import './header.css';

const header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav_logo'>Cruz</a>
        <div className='nav__menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                <i className='uil uil-estate nav__icon'></i>Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#work' className='nav__link'>
                <i className='uil uil-file-alt nav__icon'></i> Work
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default header