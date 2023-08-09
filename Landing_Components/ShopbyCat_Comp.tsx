// Next imports
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
// MUI Imports
import { Container, Typography } from "@mui/material";
// Antd imports
import { Card, Col, Row } from "antd";

// Redux imports
import { getCategoryAction } from "../Features/Category";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

// Components imports
import Loader from "../Components/Loader";

const { Meta } = Card;
const ShopbyCat_Comp = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categories, isloading } = useSelector(
    (state: RootState) => state.allcategories
  );
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);
  if (isloading) {
    return <Loader />;
  }
  return (
    <>
      <div className="container" style={{ height: "auto", marginTop: "130px" }}>
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
                            alt="Image not available"
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
    </>
  );
};

export default ShopbyCat_Comp;
