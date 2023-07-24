// Next imports
import React from "react";
// Antd imports
import {
  CopyrightOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
  SketchOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <style>
        {`


.footer-section {
  background:#232B2B;
  color: white;
  padding: 15px;
  border-radius: 12px;
  margin-top:30px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
 
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo img {
  max-width: 190px;
}

.footer-text p {
  font-size: 14px;
  color: white;
  line-height: 28px;
}

.footer-social-icon span {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.footer-social-icon a {
  color: #fff;

  margin-right: 15px;
}



.facebook-bg {
  background: #3b5998;
}

.twitter-bg {
  background: #55acee;
}

.google-bg {
  background: #dd4b39;
}

.footer-menu {
  margin-top: 20px;
  text-align: center;
}

.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}

.footer-menu li a {
  font-size: 14px;
  color: white;
  text-decoration: none;
}

.footer-menu li a:hover {
  color: rgb(25, 118, 210);
}

.fa-map-marker-alt {
  color: rgb(25, 118, 210);
}

    `}
      </style>
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <SketchOutlined
              style={{ fontSize: "150px", color: "dodgerblue" }}
            />
          </div>
          <div className="footer-text">
            <p style={{ width: "500px", textAlign: "center" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="footer-social-icon">
            <span>Social Links :</span>
            <br />
            <br />
            <a href="#">
              <TwitterOutlined
                style={{
                  fontSize: "26px",
                  backgroundColor: "white",
                  color: "#1DA1F2",
                  borderRadius: "100%",
                  padding: "4px",
                }}
              />
            </a>
            <a href="#">
              <GooglePlusOutlined
                style={{
                  fontSize: "26px",
                  backgroundColor: "#db4a39",
                  color: "white",
                  borderRadius: "100%",
                  padding: "4px",
                }}
              />
            </a>
            <a href="#">
              <i
                className="fa-brands fa-facebook"
                style={{
                  fontSize: "26px",
                  backgroundColor: "white",
                  color: "#1DA1F2",
                  borderRadius: "100%",
                  padding: "4px",
                }}
              >
                {" "}
              </i>
            </a>
          </div>
        </div>
        <div className="footer-menu" style={{ textAlign: "center" }}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <hr />
        <div
          className="copyright"
          style={{ textAlign: "center", color: "white" }}
        >
           Copyright <CopyrightOutlined /> 2023  Shopeee <SketchOutlined style={{ fontSize: "15px" }} /> All rights reserved. {" "}
          
        </div>
        <br />
      </footer>
    </>
  );
};

export default Footer;
