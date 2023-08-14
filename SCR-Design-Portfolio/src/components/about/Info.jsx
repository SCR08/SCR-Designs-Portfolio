import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-briefcase-alt-2'></i>

            <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 years working</span>
        </div>

        <div className="about__box">
        <i class='bx bx-game'></i>

            <h3 className="about__title">Hobbies</h3>
                <span className="about__subtitle">F1, Videogames & Technology</span>
        </div>

        <div className="about__box">
        <i class='bx bx-cake' ></i>

            <h3 className="about__title">Age</h3>
                <span className="about__subtitle">24 years old</span>
        </div>

    </div>
  )
}

export default Info