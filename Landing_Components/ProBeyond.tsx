// Next imports
import React from 'react'
// Styles imports
import Widget from "../styles/Widget.module.css";

const ProBeyond = () => {
  return (
    <div>
            <div className={Widget.widgets}>
            <div className={Widget.beyond}>
              <div className={Widget.beyond_text}>
                <p>iPhone 14 Pro</p>
                <h1>Pro. Beyond.</h1>
                <p>
                  From $999 or $41.62/mo.per month for 24 mo.months before
                  trade&ndash;inFootnote*
                </p>
              </div>
              <div className={Widget.beyond_image}></div>
            </div>

            <div className={Widget.mac}>
              <div className={Widget.mac_text}>
                <p style={{ color: "GrayText" }}>Limited Time Offer</p>
                <h1>Save on iPad or Mac for College.</h1>
                <p style={{ color: "GrayText" }}>
                  Plus get a gift card up to $150, 20% off AppleCare+, and
                  more.Footnote◊◊
                </p>
              </div>
              <div className={Widget.mac_image}></div>
            </div>
          </div>
    </div>
  )
}

export default ProBeyond