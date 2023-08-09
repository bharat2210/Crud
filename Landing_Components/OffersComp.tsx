// Next imports
import React from 'react'
import {useEffect} from "react";
// Redux imports
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getoffers } from '../Features/Offers';
// Styles imports
import Offerstyling from "../styles/Offers.module.css";
// Antd imports
import { Col, Row } from "antd";
// MUI imports
import { Container } from "@mui/material";
// Components imports
import Loader from '../Components/Loader';






const OffersComp = () => {
    const dispatch: AppDispatch = useDispatch();
    const { offers } = useSelector((state: RootState) => state.alloffers);
    const offerloading = useSelector(
      (state: RootState) => state.alloffers.isloading
    );

    
  useEffect(() => {
    
    dispatch(getoffers());
  }, []);
  if (offerloading) {
    return <Loader/>;
  }
  return (
    <div>

<div className={Offerstyling.offers}>
          <h1>Best Offers</h1>
          {offers &&
            offers.map((data) => (
              <Container key={data._id}>
                <Row data-aos="fade-right" >
                  <Col span={24}>
                    <img src={data.imgPath} alt="Image Not Found" />
                  </Col>
                </Row>
                <br />
              </Container>
            ))}
        </div>
    </div>
  )
}

export default OffersComp