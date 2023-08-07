// Next imports
import React from "react";
// Antd imports
import {
  CopyrightOutlined,
  GooglePlusOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {

  const date = new Date();
  const Current_Year= date.getFullYear();
  // console.log("Current Year: " , Current_Year)
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <style>
        {`
      

.footer-section {
  background:rgb(19,26,34);
  color: white;
   padding: 30px 0px 12px 0px;
  width: auto;
  height:auto;
  margin-top:30px;
  border-radius:95px 0px 0px 0px;
  
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
 justify-content:center;
  align-items: center;
  // gap:470px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo img {
  max-width: 190px;
}

.footer-text p{
  font-size: 14px;
   width:450px;
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
  font-size: 18px;
  color: black;
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
          {/* <div className="footer-logo">
          <i className="fa-solid fa-bag-shopping" style={{ fontSize: "50px", color:"white"}}></i> 
           
            <span style={{ textAlign: "center", fontSize: "22px" }}>
              iStore
            </span>
          </div> */}
          {/* <div className="footer-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book galley of
              type and scrambled it. Lorem ipsum dolor, sit amet consectetur amet.
            </p>
          </div> */}
          <div className="footer-social-icon">
            {/* <span>Social Links <i className="fa-solid fa-share-nodes"></i></span> */}
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
        </div><br />
        <div className="footer-menu" style={{ textAlign: "center",color:"black" }}>
          <ul style={{backgroundColor:"white",width:"30%",marginRight:"auto",marginLeft:"auto",padding:"8px",borderRadius:"50px"}}>
            <li>
              <a href="/Landing">Home</a>
            </li>
            <li>
              <a href="/Apiproducts">Products</a>
            </li>
            <li>
              <a href="/Gallery">Gallery</a>
            </li>
            <li>
              <a href="/Contactus">Contact</a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        {/* <hr /> */}
        <div
          className="copyright"
          style={{ textAlign: "center", color: "white" }}
        >
          Copyright <CopyrightOutlined /> {Current_Year} iStore{" "}
          <i className="fa-solid fa-bag-shopping" style={{ fontSize: "15px" }} ></i>  All rights reserved.{" "}
        </div>
        <br />
      </footer>
    </>
  );
};

export default Footer;
