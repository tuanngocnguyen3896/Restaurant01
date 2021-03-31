import React from 'react';
import '../ComingSoon/ComingForm.css'
export default function ContactTable() {
    return (
        <div className="col-md-6">
      <div
        className="comingsoon-container"
        style={{ backgroundImage: `url(./img/comingsoon-bg.png)` }}
      >
        <div className="coming-content text-center">
          <p>Call For Reservations</p>
          <h2 className="text-white">Opening Hours</h2>
          <div className="coming-subcribe-form text-white">
            <span>
              Sign up now to our newsletter and you will be one of the first
              know when our new website as ready
            </span>
            <div className="row mt-5">
          <div className="col-8 m-auto text-center">
            <div className="bold-separator bold-separator_dark">
              <span className="mt-0"></span>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
    )
}
