// Next imports
import * as React from "react";
// MUI Imports
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Container } from "@mui/material";
// Libraries imports
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../Features/imageCarousel";
import { AppDispatch, RootState } from "../store";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const theme = useTheme();
  const dispatch:AppDispatch=useDispatch()
  const [activeStep, setActiveStep] = React.useState(0);
  
  React.useEffect(()=>{
    dispatch(getImages())
  },[])

  const img= useSelector((state:RootState)=>state.allimages.images)
  // console.log("img: ", img)
  const maxSteps = img.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (

      <Container sx={{ overflowX: "hidden"}} maxWidth="lg">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
      
      >
        {img && img.map((step, index) => (
          <div key={step._id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: "flex",
                  borderRadius: "18px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                src={step.imgPath}
                alt="No image "
             
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Container>
 
  );
}

export default Carousel;
