import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import aboutStyles from "../css/about.module.css";
import universalStyles from "../css/universal.module.css";

class About extends Component {
  state = {};

  render() {
    const images = require.context("../images", true);
    return (
      <div id={`about`} className={`mt-5`}>
        <div>
          <Typography
            variant="h3"
            gutterBottom
            classes={{
              h3: `${universalStyles.whiteCl} ${universalStyles.font} ${universalStyles.heading}`,
            }}
          >
            About Me
          </Typography>
        </div>
        <div
          className={`d-flex flex-column flex-md-row ${universalStyles.componentSpaceFromHeading}`}
        >
          <div
            className={`d-flex justify-content-center justify-content-md-start ${aboutStyles.imgDiv}`}
          >
            <img
              className={`${aboutStyles.profileImage}`}
              src={images("./shams1.jpg")}
              alt="Shams Ali Android developer"
            />
          </div>
          <div className={`${aboutStyles.textDiv}`}>
            <Typography
              variant="body1"
              gutterBottom
              classes={{
                body1: `${universalStyles.whiteCl} ${universalStyles.fontForText} ${universalStyles.body}`,
              }}
            >
              Hi! My name is Shams Ali. I am a
              <span className={`${universalStyles.greenCl}`}> PAKISTAN </span>
              based android app developer. I build stunning web apps with
              customised theme ideas as per the consumer needs. I build apps
              that add value and boost the businesses into entering the market
              competitions. Apps I develop are attractive, extremely flexible
              and user friendly for all kinds of users. I build classy Apps with
              good design ideas as per the consumer needs that help businesses
              grow. If you are interested in working together or would like to
              know more about me, please get in touch.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
