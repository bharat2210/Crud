// Next imports
import React from 'react'
import Link from "next/link";
// Styles imports
import SupportStyling2 from "../styles/Support2.module.css";
const Tradein = () => {
  return (
    <div>
         <div className={SupportStyling2.dummy2}>
            <div className={SupportStyling2.support2}>
              <div className={SupportStyling2.image_support2}>
                <img
                  src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-appletradein-var1.image.large_2x.png"
                  alt=""
                  height={450}
                  width={480}
                />
              </div>
              <div className={SupportStyling2.text_support2}>
                <h1 style={{ color: "black" }}>iStore Trade In</h1> <br />
                <p>
                  {" "}
                  Turn an eligible device into credit towards a new one, or
                  recycle it for free and .
                </p>
                <br />
                <Link
                  href="#"
                  style={{ color: "rgb(0,102,204)", textDecoration: "none" }}
                  className="Link"
                >
                  Learn More{" "}
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ transition: ".5s" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Tradein