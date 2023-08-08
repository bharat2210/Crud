// Next imports
import { useEffect, useState } from "react";
// MUI Imports
import { Container, Typography } from "@mui/material";
// AntD imports
import { Card, Col, FloatButton, Row, Tooltip } from "antd";

// Components imports
import Carousel from "../Components/Carousel";
import Loader from "../Components/Loader";
// Libraries imports
import Aos from "aos";
import Link from "next/link";
// Redux imports
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { getCategoryAction } from "../Features/Category";
import { getoffers } from "../Features/Offers";
// Styles imports
import main from "../styles/Mainum_main.module.css";
import banner from "../styles/bannerimage.module.css";
import servicesstyling from "../styles/Services.module.css";
import storeStyling from "../styles/Store.module.css";
import Offerstyling from "../styles/Offers.module.css";
import SupportStyling from "../styles/Support.module.css";
import SupportStyling2 from "../styles/Support2.module.css";
import Lady from "../styles/Lady.module.css";
import Latest from "../styles/Latest.module.css";
import Widget from "../styles/Widget.module.css";
import Widget2 from "../styles/Widget2.module.css";



const { Meta } = Card;
const Landing = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categories, isloading } = useSelector(
    (state: RootState) => state.allcategories
  );
  const { offers } = useSelector((state: RootState) => state.alloffers);
  const offerloading = useSelector(
    (state: RootState) => state.alloffers.isloading
  );

  // AOS initialisation
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getoffers());
  }, []);
  if (offerloading) {
    return <Loader />;
  }
  if (isloading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <style>
          {`
    
      .Category_Shopping::first-letter{
        color:rgb(25,118,210);
      }
      .Link:hover i{
        color:black;
        transform: translate(8px,0px);
      }
      .video_container{
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        height:500px;
        width:100%;
        
    
        
      }
     
      `}
      </style>
     
        <Tooltip title="Back To Top" placement="left">
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
              src="https://img.freepik.com/premium-vector/new-product-red-ribbon-isolated-illustration_123447-882.jpg"
              alt="Not available"
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
                <h1 style={{ color: "black" }}>iStore Care</h1>
                <br />
                <p>
                  {" "}
                  Get unlimited repairs for accidental damage protection, 24/7
                  priority access to Apple experts, and more.
                </p>
                <br />
                <Link
                  href="#"
                  style={{ color: "rgb(0,102,204)", textDecoration: "none" }}
                  className="Link"
                >
                  Learn More{" "}
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ transition: ".5s" }}
                  ></i>
                </Link>
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
                <h1 style={{ color: "black" }}>iStore Trade In</h1> <br />
                <p>
                  {" "}
                  Turn an eligible device into credit towards a new one, or
                  recycle it for free and .
                </p>
                <br />
                <Link
                  href="#"
                  style={{ color: "rgb(0,102,204)", textDecoration: "none" }}
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
            <div className={Lady.lady_image}></div>
          </div>
          {/* Get the latest */}
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
          <br />
          <h2 style={{ marginLeft: "130px" }}>The latest.</h2>
          <h1
            style={{ color: "GrayText", marginLeft: "130px", fontSize: "50px" }}
          >
            Take a look at what&#39;s new, right now.
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
                <p style={{ color: "GrayText" }}>Limited Time Offer</p>
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
          <h1 style={{ marginLeft: "130px" }}>Help is here. </h1>
          <h1
            style={{ color: "GrayText", marginLeft: "130px", fontSize: "50px" }}
          >
            Whenever and however you need it.
          </h1>
          <br />
          <div className={Widget2.widget1}>
            <div className={Widget2.man}>
              <div className={Widget2.man_text}>
                <p style={{ color: "GrayText" }}>Our Specialist</p>
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
          <br />
        </div>
        <br />
        {/* Video Container */}
        <div className="video_container">
          <div className="video" style={{ height: "400px", width: "900px" }}>
            <video
              autoPlay
              style={{
                width: "900px",
                height: "400px",
              }}
              loop
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
                top: "40%",
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
                top: "75%",
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
          {offers &&
            offers.map((data) => (
              <Container>
                <Row data-aos="fade-right" key={data._id}>
                  <Col span={24}>
                    <img src={data.imgPath} alt="Image Not Found" />
                  </Col>
                </Row>
                <br />
              </Container>
            ))}
        </div>
        {/* Shop By Category */}
        <div
          className="container"
          style={{ height: "auto", marginTop: "130px" }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontWeight: "600" }}
            data-aos="fade-left"
            className="Category_Shopping"
          >
            Shop By Category{" "}
            <i
              className="fa-solid fa-bag-shopping"
              style={{ fontSize: "38px", color: "rgb(25,118,210)" }}
            ></i>
            {/* <ShoppingOutlined style={{ color: "dodgerblue" }} /> */}
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
                        style={{ width: 375 }}
                        cover={
                          <Link
                            href="/Apiproducts"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              alt="example"
                              src={data.imgPath}
                              height={265}
                              width={375}
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
      </div>

    </>
  );
};

export default Landing;
