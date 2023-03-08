import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';

const images = [
  { src: 'https://via.placeholder.com/600x400?text=Slide+1' },
  { src: 'https://via.placeholder.com/600x400?text=Slide+2' },
  { src: 'https://via.placeholder.com/600x400?text=Slide+3' },
];

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: theme.spacing(2),
  },
  slideImage: {
    width: '100%',
    height: 400,
    objectFit: 'cover',
  },
  slideContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    color: theme.palette.common.white,
    textAlign: 'center',
    zIndex: 1,
    padding: theme.spacing(2),
    maxWidth: 600,
  },
  slideButton: {
    margin: theme.spacing(2),
  },
}));

const ImageSlider = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className={classes.slideImage} src={image.src} alt={`Slide ${index + 1}`} />
            <div className={classes.slideContent}>
              <Typography variant="h4">Slide {index + 1}</Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button variant="contained" color="primary" className={classes.slideButton}>
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
