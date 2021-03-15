import React, { Component } from "react";
import Navbar from "./navbar";
import Intro from "./intro";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import UpButton from "./upButton";
import Project from "./project/root";
import universalStyles from "../css/universal.module.css";
import rootStyles from "../css/root.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends Component {
  state = {
    projects: [
      {
        name: "Xstream Gym App", // name of project and it must be unique for each
        desc:
          "An innovative fitness app with alot of exciting features to make help and fitness easy, excuse free and fun.",
        imageName: "tile.jpg", // this image is address is of the project thumbnail
        about:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        aboutImage: "about.png",
      },
      {
        name: "ePrintin App",
        desc:
          "An online feature rich printing app which provides platform to their users to print solutions for their business branding needs.",
        imageName: "tile.jpg",
        about:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        aboutImage: "about.png",
      },
      {
        name: "Covid-19 Tracker",
        desc:
          "Check the number of confirmed cases, deaths and recoveries for each country.",
        imageName: "tile.jpg",
        about:
          "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        aboutImage: "about.png",
      },
    ],
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              render={() => (
                <div
                  className={`${universalStyles.blackBg} ${rootStyles.root}`}
                >
                  <div className={`${rootStyles.subRoot} position-relative`}>
                    <Navbar />
                    <Intro />
                    <About />
                    <Projects projects={this.state.projects} />
                    <Contact />
                    <Footer />
                    <UpButton />
                  </div>
                </div>
              )}
              exact
            />
            <Route
              path="/project/:id"
              render={(props) => (
                <Project project={this.state.projects[props.match.params.id]} />
              )}
              exact
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Root;
