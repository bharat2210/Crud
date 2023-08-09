// Next imports
import React from 'react'
// Styles imports
import Widget2 from "../styles/Widget2.module.css";

const Man = () => {
  return (
    <div>

<div className={Widget2.widget1}>
            <div className={Widget2.man}>
              <div className={Widget2.man_text}>
                <p style={{ color: "GrayText" }}>Our Specialist</p>
                <h1>Shop one on one with a Specialist.</h1>
              </div>
            </div>

            <div className={Widget2.video}>
              <div className={Widget2.video_text}>
                <p style={{ color: "red" }}>New</p>
                <h1>Shop with a Specialist over video.</h1>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Man