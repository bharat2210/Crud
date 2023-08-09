// Next imports
import React from 'react'
import Link from "next/link";
// Styles imports
import Latest from "../styles/Latest.module.css";

const LatestComp = () => {
  return (
    <div>
         <div className={Latest.latest}>
            <div className={Latest.latest_text}>
              <h1>Get the latest</h1>
              <p>
                Update your iPhone or iPad to the latest version of iOS or
                iPadOS.
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
                Learn How{" "}
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ transition: ".5s" }}
                ></i>
              </Link>
            </div>
            <div className={Latest.latest_image}></div>
          </div>
    </div>
  )
}

export default LatestComp