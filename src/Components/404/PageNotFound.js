import React from 'react'
import '../Global/Banner.css'
import Fade from 'react-reveal'
export default function PageNotFound() {
    return (
        <div className="banner">
        <div
          className="banner-bg"
          style={{ backgroundImage: "url(./img/cart-bg.jpg)" }}
        >
          <Fade bottom cascade >
          <div className="banner-title">
            <div className="content text-center">
              <p className="mb-2">
                <i>404 ERROR</i>
              </p>
              <h2>PAGE NOT FOUND</h2>
              <div className="dots-separator">
                <span></span>
              </div>
              <div className="section-scroll">
                  <div className="mousey">
                      <div className="scroller"></div>
                  </div>
              </div>
              
            </div>
          </div>
          </Fade>
        </div>
        <div className="banner-overlay"></div>
      </div>
    )
}
