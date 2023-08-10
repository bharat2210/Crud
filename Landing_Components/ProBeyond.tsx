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
                <p>iPhone 14 Pro</p><br />
                <h2>Pro. Beyond.</h2><br />
                <p>
                  From $999 or $41.62/mo.per month for 24 mo.months before
                  trade&ndash;inFootnote*
                </p>
              </div>
              <div className={Widget.beyond_image}></div>
            </div>

            <div className={Widget.laptop}>
              <div className={Widget.laptop_text}>
                <p style={{ color: "GrayText" }}>MACBOOK AIR 15"</p><br />
                <h2>Impresively big. </h2><br />
                <p style={{ color: "GrayText" }}>
                From $1299 or $108.25/mo.per month for 12 mo.monthsFootnote†
                </p>
              </div>
              <div className={Widget.laptop_image}></div>
            </div>



            <div className={Widget.mac}>
              <div className={Widget.mac_text}>
                <p style={{ color: "GrayText" }}>Limited Time Offer</p><br />
                <h2>Save on iPad or Mac for College.</h2>
                <p style={{ color: "GrayText" }}> <br />
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