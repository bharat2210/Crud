// Next imports
import Link from "next/link";
import React from 'react'
// Styles imports
import SupportStyling from "../styles/Support.module.css";

const AppleCare = () => {
  return (
    <div>
      {/* Apple Care */}
      <div className={SupportStyling.dummy}>
            <div className={SupportStyling.support}>
              <div className={SupportStyling.text_support}>
                <h1 style={{ color: "black" }}>iStore Care</h1>
                <br />
                <p>
                  {" "}
                  Get unlimited repairs for accidental damage protection, 24/7
                  priority access to Apple experts, and more.
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
              <div className={SupportStyling.image_support}>
                <img
                  src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-accidents-promo-iphone.image.large_2x.png"
                  alt=""
                  height={450}
                  width={480}
                />
              </div>
            </div>
          </div>{" "}

    </div>
  )
}

export default AppleCare