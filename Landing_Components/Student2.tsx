// Next imports
import React from "react";
import Link from "next/link";
// Styles imports
import style2 from "../styles/Studentstyle2.module.css";


const Student2 = () => {
  return (
    <div>
      <div className={style2.container}>
        <div className={style2.col1}>
          <div className="image">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-student-aid-music-tv-icons-202306?wid=117&hei=53&fmt=png-alpha&.v=1685682466633"
              alt=""
            />
            <br />
            <h2>
              Student save on <br />
              Apple Music.With free <br />
              access to Apple TV+.
            </h2>
            <br />
            <p style={{ width: "240px", color: "GrayText" }}>
              Subscribe and get 3 additional months of Apple Music free.
              Students pay a special rate of &#8377;498.03/month&mdash;with free access to
              Apple TV+.
            </p>
            <Link
              href="#"
              style={{ textDecoration: "none", color: "rgb(0,102,204)" }}
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
        <div className={style2.col2}>
          <div className={style2.text_col2}>
            <h2>
              Protect your Mac or <br />
              iPad with 20% off <br />
              AppleCare+.
            </h2>
            <br />
            <p style={{ color: "GrayText" }}>
              And get unlimited repairs for accidental damage.
            </p>
            <Link
              href="#"
              style={{ textDecoration: "none", color: "rgb(0,102,204)" }}
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
  );
};

export default Student2;
