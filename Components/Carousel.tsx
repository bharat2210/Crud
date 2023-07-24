// Next imports
import * as React from "react";
// MUI Imports
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// Libraries imports
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Container } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://www.apple.com/in/iphone-14/images/meta/iphone-14_overview__50yr9pd9hfm2_og.png?202305180126",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027205808",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027358341",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027925267",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661028248718",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263304",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263356",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-unselect-gallery-4-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655249929536",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505836714",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1655316263356",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662150005626",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1662129048006",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-finish-unselect-gallery-4-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128967910",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-5-4inch_AV1?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1671463394187",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-5-4inch_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1671463403579",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1657641867367",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-5-4inch_AV2_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1671463394783",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-orange-202110_FV1?wid=934&hei=440&fmt=jpeg&qlt=95&.v=1633086020000",
  },
  {
    imgPath:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-midnight-202210?wid=470&hei=556&fmt=png-alpha&.v=1670557210097",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Container sx={{ overflowX: "hidden" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div>
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
