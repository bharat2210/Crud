// Next imports
import React from 'react'
// Styles imports
import banner from "../styles/bannerimage.module.css";

const Banner = () => {
  return (
    <div>
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
    </div>
  )
}

export default Banner