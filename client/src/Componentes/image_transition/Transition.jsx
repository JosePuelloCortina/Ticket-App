import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { Box, Button, MobileStepper, Paper, Typography, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from "@material-ui/core/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'The Batman (2022)',
    imgPath:'https://www.themoviedb.org/t/p/original/j2zyoYrWjWyraHMdkqAkSG1MISJ.jpg',
  },
  {
    label: 'Spider-Man: No Way Home (2021)',
    imgPath:'https://www.themoviedb.org/t/p/original/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg',
  },
  {
    label: 'Moonfall (2022)',
    imgPath:'https://www.themoviedb.org/t/p/original/hKkPFAO4AY1r49QQO9DsPIgHGtr.jpg',
  },
  {
    label: 'Godzilla vs. Kong (2021)',
    imgPath: 'https://www.themoviedb.org/t/p/original/iopYFB1b6Bh7FWZh3onQhph1sih.jpg',
  },
]

const useStyles = makeStyles({
    left:{
        backgroundColor: '#22272E',
        display: 'flex',
        width: '50%',
        flexGrow: 1,
        position: 'relative',
        zIndex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
      },
      wrapper:{
        display: 'flex',
        justifyContent: 'center',
        overFlow: 'hidden',
        boxSizing: 'border-box',
      },
})

function Transition() {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

    const classes = useStyles();
    
    return(
      <div className={classes.left}>
        <div className={classes.wrapper}>
          <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
            <Paper square elevation={0}
              sx={{ display: 'flex', alignItems: 'center', height: 50, pl: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography style={{padding:'10px'}}>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box component="img"
                  sx={{ height: 300, display: 'block',
                    maxWidth: 500,
                    overflow: 'hidden',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      </div>
    )
}

export default Transition