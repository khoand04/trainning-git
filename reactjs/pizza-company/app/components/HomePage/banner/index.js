import * as React from 'react';
import { Box, MobileStepper, Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'banner Chicken',
    imgPath:
      'https://thepizzacompany.vn/images/thumbs/000/0003207_BannerSlider_CHICKEN%20KOREAN%20STYLE_1200x480px-opt2%20copy.jpeg',
  },
  {
    label: 'banner GHN',
    imgPath:
      'https://thepizzacompany.vn/images/thumbs/000/0003003_giao-hang-nhanh.jpeg',
  },
  {
    label: 'banner Birthday',
    imgPath:
      'https://thepizzacompany.vn/images/thumbs/000/0003448_Birthday_Party.jpeg',
  },
  {
    label: 'banner Summer',
    imgPath:
      'https://thepizzacompany.vn/images/thumbs/000/0003716_Banner-Hè-real-deal-xịn_1200x480.jpeg',
  },
  {
    label: 'banner thumbs',
    imgPath:
      'https://thepizzacompany.vn/images/thumbs/000/0003749_38255f21f355230b7a44.jpeg',
  },
  {
    label: 'banner VMV',
    imgPath:
      'https://thepizzacompany.vn/images/thumbs/000/0003674_pizzavuonmyvi.jpeg',
  },
  {
    label: 'banner 11',
    imgPath:
      'https://thepizzacompany.vn/images/thumbs/000/0003699_Website-banner-BOGO_NewGuideline_(1200x480)px.png',
  },
];

export const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div>
      <Box sx={{ width: '100%', height: 520, flexGrow: 1, marginBottom: 3 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        />
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 450,
                    display: 'block',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    width: '100%',
                    borderRadius: '15px',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Box sx={{ marginTop: '-250px' }}>
          <MobileStepper
            variant=""
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <ArrowForwardIcon />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <ArrowBackIcon />
              </Button>
            }
          />
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
