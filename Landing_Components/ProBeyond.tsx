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
                  From &#8377;83,050 or &#8377;3460.02/mo.per month for 24 mo.months before
                  trade&ndash;inFootnote
                </p>
              </div>
              <div className={Widget.beyond_image}></div>
            </div>

            <div className={Widget.laptop}>
              <div className={Widget.laptop_text}>
                <p style={{ color: "GrayText" }}>MACBOOK AIR 15"</p><br />
                <h2>Impresively big. </h2><br />
                <p style={{ color: "GrayText" }}>
                From &#8377;1,07,980.02 or &#8377;8998.34/mo.per month for 12 mo.monthsFootnote†
                </p>
              </div>
              <div className={Widget.laptop_image}>

              </div>
            </div>



            <div className={Widget.mac}>
              <div className={Widget.mac_text}>
                <p style={{ color: "GrayText" }}>Limited Time Offer</p><br />
                <h2>Save on iPad or Mac for College.</h2>
                <p style={{ color: "GrayText" }}> <br />
                  Plus get a gift card up to &#8377;12,468, 20% off AppleCare+, and
                  more.
                </p>
              </div>
              <div className={Widget.mac_image}></div>
            </div>
          </div>
    </div>
  )
}

export default ProBeyond