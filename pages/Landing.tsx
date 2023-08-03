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
// Styles imports
import main from '../styles/Mainum_main.module.css'
import banner from '../styles/bannerimage.module.css'
import servicesstyling from '../styles/Services.module.css'
import storeStyling from '../styles/Store.module.css'
import Offerstyling from '../styles/Offers.module.css'
import SupportStyling from '../styles/Support.module.css'
import SupportStyling2 from '../styles/Support2.module.css'
import Lady from '../styles/Lady.module.css'
import Latest from '../styles/Latest.module.css'
import Widget from '../styles/Widget.module.css'
import Widget2 from '../styles/Widget2.module.css'

const { Meta } = Card;
const Landing = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categories } = useSelector((state:RootState) => state.allcategories);

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
    
      .Category_Shopping::first-letter{
        color:rgb(25,118,210);
      }
      `}
      </style>
      <Tooltip title="Back To Top"  placement="left">
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
          className={banner.bannerimage}
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
            marginLeft: "250px",
            transition: ".5s",
          }}
          className={banner.bannerimage}
        />
      </div>

      <br />
      <br /> <br /> <br />
      <div className={main.mainum_main}>

        <div className={servicesstyling.service}>
          <h1> Get Support</h1>
        </div>
      
 {/* Apple Care */}
        <div className={SupportStyling.dummy}>
   
          <div className={SupportStyling.support}>
       
            <div className={SupportStyling.text_support}>
           
              <p>
              <h1 style={{color:"black"}}>iStore Care</h1><br />
                Get unlimited repairs for accidental damage protection, 24/7
                priority access to Apple experts, and more. <br />
                <Link
                  href="#"
                  style={{ color: "rgb(0,102,204)", textDecoration: "none" }}
                >
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </p>
            </div>
            <div className={SupportStyling.image_support}>
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-accidents-promo-iphone.image.large_2x.png"
                alt=""
                height={450}
                width={480}
              />
            </div>
          </div>
        </div>{" "}

    {/* Trade in */}
        <div className={SupportStyling2.dummy2}>
          <div className={SupportStyling2.support2}>
            <div className={SupportStyling2.image_support2}>
              <img
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_content/tile-feature-appletradein-var1.image.large_2x.png"
                alt=""
                height={450}
                width={480}
              />
            </div>
            <div className={SupportStyling2.text_support2}>
             
              <p>
              <h1 style={{color:"black"}}>iStore Trade In</h1> <br />
                Turn an eligible device into credit towards a new one, or
                recycle it for free and . <br />
                <Link
                  href="#"
                  style={{ color: "rgb(0,102,204)", textDecoration: "none" }}
                >
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
       {/* Lady  */}
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
                textAlign: "center",
                color: "rgb(0,102,204)",
              }}
            >
              Learn More <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
          <div className={Lady.lady_image}></div>
        </div>
       
{/* Get the latest */}
        <div className={Latest.latest}>
          <div className={Latest.latest_text}>
            <h1>Get the latest</h1>
            <p>
              Update your iPhone or iPad to the latest version of iOS or iPadOS.
            </p>
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "rgb(0,102,204)",
              }}
            >
              Learn How <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
          <div className={Latest.latest_image}></div>
        </div>
    <br />
        <h1 style={{ marginLeft: "120px" }}>
          The latest.
          <h1 style={{ color: "GrayText" }}>
            Take a look at what&#39;s new, right now.
          </h1>
        </h1>
        <br />
        {/* Iphone 14 pro beyond */}
        <div className={Widget.widgets}>
          <div className={Widget.beyond}>
            <div className={Widget.beyond_text}>
              <p>iPhone 14 Pro</p>
              <h1>Pro. Beyond.</h1>
              <p>
                From $999 or $41.62/mo.per month for 24 mo.months before
                trade&ndash;inFootnote*
              </p>
            </div>
            <div className={Widget.beyond_image}></div>
          </div>

          <div className={Widget.mac}>
            <div className={Widget.mac_text}>
              <p style={{color:"GrayText"}}>Limited Time Offer</p>
              <h1>Save on iPad or Mac for College.</h1>
              <p style={{ color: "GrayText" }}>
                Plus get a gift card up to $150, 20% off AppleCare+, and
                more.Footnote◊◊
              </p>
            </div>
            <div className={Widget.mac_image}></div>
          </div>
        </div>
        <br />
       <br />
       {/* Man and Shopping on video */}
        <h1 style={{ marginLeft: "120px" }}>
          Help is here.{" "}
          <h1 style={{ color: "GrayText" }}>
            Whenever and however you need it.
          </h1>
        </h1>
        <br />
        <div className={Widget2.widget1}>
          <div className={Widget2.man}>
            <div className={Widget2.man_text}>
              <p style={{color:"GrayText"}}>Our Specialist</p>
              <h1>Shop one on one with a Specialist.</h1>
            </div>
          </div>

          <div className={Widget2.video}>
            <div className={Widget2.video_text}>
              <p style={{ color: "red" }}>New</p>
              <h1>Shop with a Specialist over video.</h1>
            </div>
          </div>
        </div>
      </div>

     {/* Store Background image Visit to our Store */}
      <div className={storeStyling.store}>
        <div className={storeStyling.store_text}>
          <h1>Visit Our Store</h1> <br />
          <h4>For better experience</h4>
        </div>
      </div>

     {/* Offers */}
      <div className={Offerstyling.offers}>
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

{/* Shop By Category */}
      <div className="container" style={{ height: "auto", marginTop: "130px" }}>
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
                          <img
                            alt="example"
                            src={data.imgPath}
                            height={265}
                            width={370}
                          />
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
