import React from 'react';
import './studies.css';

const Studies = () => {
  return (
    <section className="studies section" id='studies'>
        <h2 className="section__title">Studies</h2>
      <span className="section__subtitle">My journey</span>

      <div className="studies studies__container container">
        <div className="studies__tabs">

          <div className="studies__button">
              <i class="uil uil-graduation-cap studies__icon"></i> Education
          </div>

        </div>

        <div className="studies__sections">
              <div className="studies__content">

                <div className="studies__data">
                  <div>
                    <h3 className="studies__title">Programa ONE</h3>
                      <span className="studies__subtitle">Oracle Next Eductation</span>
                      <div className="studies__duration">
                        <i class="uil uil-calendar-alt"></i> 2023 - Present
                      </div>
                  </div>

                  <div>
                    <span className="studies__rounder"></span>
                    <span className="studies__line"></span>
                  </div>

                </div>

                <div className="studies__data">
                  <div></div>

                  <div>
                      <span className="studies__rounder"></span>
                      <span className="studies__line"></span>
                  </div>

                  <div>
                    <h3 className="studies__title">Meta Front-End Developer</h3>
                      <span className="studies__subtitle">Coursera / Meta Front-End Professional Certificate</span>
                      <div className="studies__duration">
                        <i class="uil uil-calendar-alt"></i> Jun 9, 2023
                    </div>
                  </div>

                </div>

                <div className="studies__data">
                  <div>
                    <h3 className="studies__title">Google UX Design</h3>
                      <span className="studies__subtitle">Coursera / Google UX Design Professional Certificate</span>
                      <div className="studies__duration">
                        <i class="uil uil-calendar-alt"></i> Dec 3, 2022
                    </div>
                  </div>

                  <div>
                    <span className="studies__rounder"></span>
                    <span className="studies__line"></span>
                  </div>

                </div>


              </div>
            </div>
      </div>
    </section>
  )
}

export default Studies