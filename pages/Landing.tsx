// Next imports
import { useEffect, useState } from "react";
// MUI Imports
import { Container, Typography } from "@mui/material";
// AntD imports
import { Card, Col, FloatButton, Row, Tooltip } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
// Components imports
import Carousel from "../Components/Carousel";

// Libraries imports
import Aos from "aos";
import Link from "next/link";
// Redux imports
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { getCategoryAction } from "../Features/Category";

const { Meta } = Card;
const Landing = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.allcategories);

  // AOS initialisation
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);

  return (
    <>
      <style>
        {`
      
      .bannerimage:hover{
        transform:scale(1.2);
       
      }
      .mainum-main{
        background-color:#edf2fb;
        padding-bottom:30px;
      }
      .service h1{
        text-align: center;
        font-size:50px;
      }
      .service h1::first-letter{
        color:rgb(25,118,210)
      }
      .store{
        height:800px;
        width:100%;
        background-image:url("https://images.unsplash.com/photo-1631211541363-b79b94085c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
        background-attachment:fixed;
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        position:relative;
      }
      .store-text{
        position:absolute;
        top:100px;
        left:30%;
      }
      .store-text h1{
        color:white;
        font-size:110px;
        letter-spacing:3px;
      }
      .store-text h1::first-letter{
        color:rgb(25,118,210);
      }
      .store-text h4{
        text-align:center;
        color:rgb(25,118,210);
        font-size:30px;
   
      }
      .offers h1{
        font-size:50px;
        text-align:center;
        word-spacing:2px;
        letter-spacing:3px;
      }
      .offers h1::first-letter{
        color:rgb(25,118,210);
      }
    
      .Category_Shopping::first-letter{
        color:rgb(25,118,210);
      }
      .service{
        height:600px;
        width:100%;
        background-image:url("https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-split-getsupport.image.large_2x.png");
      }
      .support{
        display:flex;
       flex-direction:row;
       justify-content:center;
      
      }
      .text-support p{
        alignItems:center;
        width:340px;
        line-height:25px;
        color:graytext;
       
      }
      .text-support{
        margin-top:auto;
        margin-bottom:auto;
        padding:12px;
        width:480px;
        text-align:left;
  
       
      }
      .image-support{
        width:480px;
      }
      .image-support img{
        border-radius:0px 28px 28px 0px;
      }
      .dummy{
        height:450px;
        width:960px;
        margin-left:auto;
        margin-right:auto;
        background-color:white;
        // border:2px solid black;
        border-radius:28px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      }
      .dummy2{
        height:450px;
        width:960px;
        margin-left:auto;
        margin-right:auto;
        background-color:white;
        // border:2px solid black;
        border-radius:28px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 38px;
      }
      .text-support2{
        margin-top:auto;
        margin-bottom:auto;
        padding:12px;
        text-align:right;
        width:480px;
  
       
      }
      .image-support2{
        width:480px;
      }
      .image-support2 img{
        border-radius:28px 0px 0px 28px;
      }
      .support2{
        display:flex;
       flex-direction:row;
       justify-content:center;
      
      }
      .text-support2 p{
        width:340px;
        line-height:25px;
        float:right;
        color:graytext;
     
      }
      .lady{
        height:600px;
        width:960px;
        margin:auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:white;
        border-radius: 28px;
      }
      .lady-text{
        height:200px;
        width:100%;
        text-align:center;
   
      }
      .lady-text p{
        margin-top:15px;
        font-size:18px;
        color:graytext;
      }
      .lady-text h1{
        margin-top:30px;
        font-size:42px;
        color:rgb(29,29,31);
      }
      .lady-image{
        height:400px;
        width:100%;
        background-image:url(https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-privacy-skills.image.large_2x.png);
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        border-radius:0px 0px 28px 28px;
      }

      .latest{
        height:600px;
        width:960px;
        margin:auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        background-color:white;
        border-radius: 28px;
      }
      .latest-text{
        height:200px;
        width:100%;
        text-align:center;
   
      }
      .latest-text p{
        margin-top:15px;
        font-size:18px;
        color:graytext;
      }
      .latest-text h1{
        margin-top:30px;
        font-size:42px;
        color:rgb(29,29,31);
      }
      .latest-image{
        height:400px;
        width:100%;
        background-image:url(https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-ios16.image.large_2x.png);
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
        border-radius:0px 0px 28px 28px;
      }
    
     
      
      `}
      </style>
      <Tooltip title="Go To Top" color="green" placement="left">
        <FloatButton.BackTop type="primary" />
      </Tooltip>
      <div className="img" data-aos="zoom-in">
        <img
          src="https://www.names.co.uk/blog/wp-content/uploads/2018/05/dotSTORE.png"
          alt=""
          height={180}
        />
        <img
          src="https://www.wkkf.org/wp-content/uploads/2023/03/at-a-glance-graphic2.jpg"
          alt=""
          height={200}
          width={300}
        />
      </div>
      <Carousel />
      <div className="newproducts">
        <h1
          style={{
            textAlign: "center",
            color: "orangered",
            fontFamily: "sans-serif",
            fontStyle: "italic",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1197832105/vector/male-hand-holding-megaphone-with-new-product-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=INIM5M-N2DZh6pS6DUBSGh7x9ItOBSC3atZOVJtQf7M="
            alt=""
            height={200}
            width={350}
          />
        </h1>
        <br />
        <br />
        <br />
        <img
          src="https://www.apple.com/in/iphone-14/images/meta/iphone-14_overview__50yr9pd9hfm2_og.png?202305180126"
          alt=""
          height={600}
          width={1200}
          style={{
            borderRadius: "12px",
            marginLeft: "200px",
            transition: ".5s",
          }}
          className="bannerimage"
        />{" "}
        <br />
        <br />
        <img
          src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-5up-hero-220907_Full-Bleed-Image.jpg.large.jpg"
          alt=""
          height={600}
          width={1100}
          style={{
            borderRadius: "12px",
            marginLeft: "200px",
            transition: ".5s",
          }}
          className="bannerimage"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mainum-main">
      <div className="service">
        <h1> Get Support</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="dummy">
        <div className="support">
          <div className="text-support">
            <h1>Shopeee Care</h1>
            <p>
              Get unlimited repairs for accidental damage protection, 24/7
              priority access to Apple experts, and more. <br />
              <Link href="#" style={{ color: "rgb(0,102,204)",textDecoration:"none" }}>
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </p>
          </div>
          <div className="image-support">
            <img
              src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-accidents-promo-iphone.image.large_2x.png"
              alt=""
              height={450}
              width={480}
            />
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <br />
      <div className="dummy2">
        <div className="support2">
          <div className="image-support2">
            <img
              src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-appletradein-var1.image.large_2x.png"
              alt=""
              height={450}
              width={480}
            />
          </div>
          <div className="text-support2">
            <h1>Shopeee Trade In</h1>
            <p>
              Turn an eligible device into credit towards a new one, or recycle
              it for free and . <br />
              <Link href="#" style={{ color: "rgb(0,102,204)",textDecoration:"none" }}>
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <br /><br />

      <div className="lady">
        <div className="lady-text">
          <h1>Take Charge of your Privacy</h1>
          <p>Join a 30-minute session at the Apple Store and learn how to protect your privacy on iPhone.</p><br />
          <Link href="#" style={{textDecoration:"none",textAlign:"center",color:"rgb(0,102,204)"}}>Learn More <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        <div className="lady-image">
         
        </div>
      </div><br />
      <br />
      <div className="latest">
        <div className="latest-text">
        <h1>Get the latest</h1>
          <p>Update your iPhone or iPad to the latest version of iOS or iPadOS.</p><br />
          <Link href="#" style={{textDecoration:"none",textAlign:"center",color:"rgb(0,102,204)"}}>Learn How <i className="fa-solid fa-chevron-right"></i></Link>
        </div>
        <div className="latest-image">

        </div>
      </div>
      </div>
    
      <div className="store">
        <div className="store-text">
          <h1>Visit Our Store</h1> <br />
          <h4>For better experience</h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="offers">
        <h1>Best Offers</h1>
        <Container fixed>
          <Row data-aos="fade-right">
            <Col span={24}>
              <img src="Offer1.png" alt="" />
            </Col>
          </Row>
          <br />
          <Row data-aos="fade-left">
            <Col span={24}>
              <img src="Offer2.png" alt="" />
            </Col>
          </Row>
          <br />
          <Row data-aos="fade-right">
            <Col span={24}>
              <img src="Offer3.png" alt="" />
            </Col>
          </Row>
          <br />
          <Row data-aos="fade-left">
            <Col span={24}>
              <img src="Offer4.png" alt="" />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      <div className="container" style={{ height: "auto", marginTop: "150px" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bolder" }}
          data-aos="fade-left"
          className="Category_Shopping"
        >
          Shop By Category <ShoppingOutlined style={{ color: "dodgerblue" }} />
        </Typography>
        <br />
        <br />
        <div className="cards" data-aos="fade-right">
          <Container>
            <Row gutter={[12, 12]}>
              {categories &&
                categories?.map((data) => (
                  <Col key={data._id}>
                    <Card
                      hoverable
                      style={{ width: 370 }}
                      cover={
                        <Link
                          href="/Apiproducts"
                          style={{ textAlign: "center" }}
                        >
                          <img alt="example" src={data.imgPath} height={265} width={370} />
                        </Link>
                      }
                    >
                      <Meta
                        title={data.title}
                        description={
                          data.description.length > 200
                            ? `${data.description.slice(0, 140)}...`
                            : data.description
                        }
                      />
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Landing;
