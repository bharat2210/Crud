// Next imports
import { useEffect } from "react";
// MUI Imports
// Antd imports
import { FloatButton, Tooltip } from "antd";
// Components imports
import Carousel from "../Components/Carousel";
import AppleCare from "../Landing_Components/AppleCare";
import Tradein from "../Landing_Components/Tradein";
import LadyComp from "../Landing_Components/Lady";
import LatestComp from "../Landing_Components/LatestComp";
import ProBeyond from "../Landing_Components/ProBeyond";
import Man from "../Landing_Components/Man";
import BacktoCollege from "../Landing_Components/BacktoCollege";
import CollegeAccessories from "../Landing_Components/CollegeAccessories";
import MacImage from "../Landing_Components/MacImage";
import Video from "../Landing_Components/Video";
import Store from "../Landing_Components/Store";
import Banner from "../Landing_Components/Banner";
import ManHeading from "../Landing_Components/ManHeading";
import LatestHeading from "../Landing_Components/LatestHeading";
import CollegeHeading from "../Landing_Components/CollegeHeading";
import OffersComp from "../Landing_Components/OffersComp";
import ShopbyCat_Comp from "../Landing_Components/ShopbyCat_Comp";
// Libraries imports
import Aos from "aos";
// Styles imports
import main from "../styles/Mainum_main.module.css";
import servicesstyling from "../styles/Services.module.css";






const Landing = () => {
  // AOS initialisation
  useEffect(() => {
    Aos.init();
  }, []);

 

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
        <Banner />

        <div className={main.mainum_main}>
          <div className={servicesstyling.service}>
            <h1>Get Support</h1>
          </div>
    
       <AppleCare />
          <Tradein />
          <LadyComp />
          <LatestComp /><br /><br /><br />
          <LatestHeading /><br />
          <ProBeyond /><br /><br /><br />
          <ManHeading /><br />
          <Man /><br /><br /><br />
          <CollegeHeading/>
          <BacktoCollege />
          <CollegeAccessories />
          <MacImage />
    
        </div>

        <br />

        <Video /> 
        <Store />
        <OffersComp/>
        <ShopbyCat_Comp/>
      
      </div>
    </>
  );
};
export default Landing;
