// Next imports
import React from "react";
import Link from "next/link";

const Video = () => {
  return (
    <>
      <div className="video_container">
        <div className="video" style={{ height: "400px", width: "900px" }}>
          <video
            autoPlay
            loop
            style={{
              width: "900px",
              height: "400px",
            }}
          >
            <source src="https://store.storevideos.cdn-apple.com/v1/store.apple.com/st/1685058874541/bts-header-video-202306.mp4" />
          </video>
        </div>
        <div
          className="video_text"
          style={{
            height: "350px",
            width: "500px",
            textAlign: "left",
            position: "relative",
            top: "25px",
          }}
        >
          <h1
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              fontSize: "50px",
            }}
          >
            Bring on College
          </h1>
          <br />
          <p
            style={{
              width: "400px",
              textAlign: "left",
              position: "absolute",
              top: "36%",
              left: "15%",
              color: "GrayText",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            vitae ad voluptatum eveniet, ea fugit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <br />
          <Link
            href="#"
            style={{
              position: "absolute",
              top: "62%",
              left: "15%",
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
      </div>
    </>
  );
};

export default Video;
