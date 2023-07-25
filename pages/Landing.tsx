// Next imports
import { useEffect } from "react";
// MUI Imports
import { Container, Typography } from "@mui/material";
// AntD imports
import { Card, Col, FloatButton, Row, Tooltip } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
// Components imports
import Carousel from "../Components/Carousel";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
// Libraries imports
import Aos from "aos";

const images = [
  {
    imgpath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662129048006",
    title: "iPhone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgpath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-touch-id-blue-gallery-2?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1617741434000",
    title: "Mac Book",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgpath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1551489688005",
    title: "AirPods",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgpath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210?wid=470&hei=556&fmt=png-alpha&.v=1670557210097",
    title: "iSpeakers",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgpath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-model-select-gallery-2-202212?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1667594167534",
    title: "iPad",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgpath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-gallery-1-202203?wid=320&hei=264&fmt=p-jpg&qlt=95&.v=1675709041796",
    title: "Displays",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const { Meta } = Card;
const Landing = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <style>
        {`
      .bannerimage:hover{
        transform:scale(1.2);
       
      }
      
      `}
      </style>
      <Tooltip title="Go To Top" color="green" placement="left">
        <FloatButton.BackTop type="primary"/>
         
      </Tooltip>
      <Navbar1 />

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
      <br />
      <br />
      <div className="newproducts">
        <h1 style={{ textAlign: "center", color: "orangered" ,fontFamily:"sans-serif",fontStyle:"italic"}}>
        Newly Launched
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
        <br /><br />
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
      </div><br /><br /><br />
      <div className="service">
        <h1 style={{ textAlign: "center", color: "GrayText" }}>
          Services Offered
        </h1>
        <img
          src="Services.jpg"
          alt=""
          style={{ marginLeft: "300px", borderRadius:"12px"}}
        height={750} width={1000}/>
      </div>
      
      <div className="container" style={{ height: "auto", marginTop: "150px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center" }}
          data-aos="fade-left"
        >
          Shop By Category <ShoppingOutlined style={{ color: "dodgerblue" }} />
        </Typography>
        <br />
        <div className="cards" data-aos="fade-right">
          <Container>
            <Row gutter={[12, 12]}>
              {images.map((data) => (
                <Col>
                  <Card
                    hoverable
                    style={{ width: 370 }}
                    cover={
                      <img alt="example" src={data.imgpath} height={255} />
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
