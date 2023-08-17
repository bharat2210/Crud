// Next imports
import React from "react";
import Link from "next/link";
// Styles imports
import studentstl from "../styles/Studentstyle.module.css";



const Student = () => {
  return (
    <div>
      <div className={studentstl.main_Student}>
        <div className={studentstl.student_col1}>
          <div className={studentstl.text_student_col1}>
            <h2>
              Get credit with <br />
              Apple Trade In.
            </h2>
            <br />
            <p style={{color:"GrayText"}}>
              Trade in your eligible device and get credit toward a new one.
            </p>
            <Link
              href="#"
              style={{ textDecoration: "none", color: "rgb(0,102,204)" }}
              className="Link"
            >
              Learn More
              <i
                className="fa-solid fa-chevron-right"
                style={{ transition: ".5s" }}
              ></i>
            </Link>
          </div>
        </div>
        <div className={studentstl.student_col2}>
          <div className="image">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-student-aid-applecard-icon-202306?wid=65&hei=46&fmt=png-alpha&.v=1685682466529"
              alt=""
            />

            <div className="text">
              <h2>
                Get 0% APR with <br />
                Apple card.
              </h2>
              <br />
              <p style={{ width: "200px",color:"GrayText" }}>
                Pay over time, interest-free when you choose to check out with
                Apple Card Monthly Installments.
              </p>
            </div>
            <Link
              href="#"
              style={{ textDecoration: "none", color: "rgb(0,102,204)" }}
              className="Link"
            >
              Learn More
              <i
                className="fa-solid fa-chevron-right"
                style={{ transition: ".5s" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
