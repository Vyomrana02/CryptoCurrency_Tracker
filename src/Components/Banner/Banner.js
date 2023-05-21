import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    paddingRight: 150,
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color: "white",
              fontWeight: "bold",
              marginBottom: 50,
              marginLeft: 130,
              fontFamily: "Muntserrat",
            }}
          >
            Crypto Manager
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}

export default Banner;