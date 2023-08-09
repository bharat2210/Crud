// Next imports
import React from 'react'
import Link from "next/link";
// Styles imports
import Lady from "../styles/Lady.module.css";

const LadyComp = () =>{
  return (
    <div>
         <div className={Lady.lady}>
            <div className={Lady.lady_text}>
              <h1>Take Charge of your Privacy</h1>
              <p>
                Join a 30-minute session at the Apple Store and learn how to
                protect your privacy on iPhone.
              </p>
              <br />
              <Link
                href="#"
                style={{
                  textDecoration: "none",
                  color: "rgb(0,102,204)",
                }}
                className="Link"
              >
                Learn More{" "}
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ transition: ".5s" }}
                ></i>
              </Link>
            </div>
            <div className={Lady.lady_image}></div>
          </div>
    </div>
  )
}
export default LadyComp;