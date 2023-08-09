// Next imports
import React from 'react'
import Link from "next/link";
// Styles imports
import collegeACC from "../styles/CollegeAccessories.module.css";


const CollegeAccessories = () => {
  return (
    <div> <div className={collegeACC.main_college_accessories}>
    <div className={collegeACC.college_accessories_text}>
      <div className={collegeACC.text_college}>
        <h2>
          Choose your electives <br />
          for Mac or iPad.{" "}
        </h2>
        <Link
          href="#"
          style={{ color: "rgb(0,102,204)", textDecoration: "none" }}
          className="Link"
        >
          Shop accessories for college{" "}
          <i
            className="fa-solid fa-chevron-right"
            style={{ transition: ".5s" }}
          ></i>
        </Link>
      </div>
    </div>
  </div></div>
  )
}

export default CollegeAccessories