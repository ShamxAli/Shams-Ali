import React, { Component } from "react";
import Navbar from "../navbar";
import About from "./about";
// import Features from "./features";
import Footer from "../footer";
import universalStyles from "../../css/universal.module.css";
import rootStyles from "../../css/root.module.css";
import Jump from "jump.js";
import UpButton from "../upButton";

class Root extends Component {
  state = {};
  componentDidMount() {
    Jump("#navbar", {
      offset: -30,
    });
  }
  render() {
    return (
      <div className={`${universalStyles.blackBg} ${rootStyles.root}`}>
        <div className={`${rootStyles.subRoot} position-relative`}>
          <Navbar projectDetails={true} />
          <About project={this.props.project} />
          {/* <Features project={this.props.project} /> */}
          <Footer />
          <UpButton />
        </div>
      </div>
    );
  }
}

export default Root;
