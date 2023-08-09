// Next imports
import React from 'react'
import Link from "next/link";
// Styles imports
import college from "../styles/College.module.css";


const BacktoCollege = () => {
  return (
    <div> <div className={college.main_college}>
    <div className={college.college_text}>
      <div className={college.text}>
        <h1>Your first college debate:</h1>
        <h2>Mac or iPad</h2>
        <p>
          Choose a Mac, iPad, or both. <br /> There are no wrong
          answers.
        </p>
        <Link
          href="#"
          style={{ color: "rgb(0,102,204)", textDecoration: "none" }}
          className="Link"
        >
          Learn more about Apple for college
          <i
            className="fa-solid fa-chevron-right"
            style={{ transition: ".5s" }}
          ></i>
        </Link>
      </div>
    </div>
    <div className={college.college_image}>
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-college-debate-202306?wid=686&hei=472&fmt=png-alpha&.v=1685682466809"
        alt=""
        height={300}
        width={400}
      />
    </div>
  </div></div>
  )
}

export default BacktoCollege