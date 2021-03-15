import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import aboutStyles from "../../css/project/about.module.css";
import universalStyles from "../../css/universal.module.css";

class About extends Component {
  state = {};

  render() {
    const images = require.context("../../images", true);
    return (
      <div id={`about`} className={`${aboutStyles.about}`}>
        <div>
          <Typography
            variant="h3"
            gutterBottom
            classes={{
              h3: `${universalStyles.whiteCl} ${universalStyles.font} ${universalStyles.heading}`,
            }}
          >
            About "{this.props.project.name}"
          </Typography>
        </div>
        <div
          className={`d-flex flex-column ${universalStyles.componentSpaceFromHeading}`}
        >
          <div className={`d-flex justify-content-center`}>
            <img
              className={`${aboutStyles.aboutImage}`}
              src={images(
                `./${this.props.project.name}/${this.props.project.aboutImage}`
              )}
              alt={this.props.project.name}
            />
          </div>
          <div className={`d-flex justify-content-center`}>
            <div
              className={`${aboutStyles.textDiv} d-flex justify-content-center`}
            >
              <Typography
                variant="body1"
                gutterBottom
                classes={{
                  body1: `${universalStyles.whiteCl} ${universalStyles.fontForText} ${universalStyles.body}`,
                }}
              >
                {this.props.project.about}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
