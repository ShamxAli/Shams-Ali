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
          "This app represents perhaps the ultimate in-pocket personal trainer. Whether you’re looking to lose weight, tone your thighs, lift more weights, or become a faster runner. The application will help you with thousands of free workouts VIDEOS coached by real-life personal trainers. This app has all the tools you need to get fit—a massive library of instructional training videos, live streaming personal trainers, fitness routine planning, and tracking tools that help you target your workouts and keep easy track of your progress. They’ll walk you through each exercise with timed step-by-step audio, photo, and video, with—bonus—offers. Technologies Used: Kotlin, Java Android Studio, Network Programming, Android components, Bluetooth, RESTful Web Services, Push Notifications.",
        aboutImage: "about.png",
      },
      {
        name: "ePrintin App",
        desc:
          "An online feature rich printing app which provides platform to their users to print solutions for their business branding needs.",
        imageName: "tile.jpg",
        about:
          "ePrintin is an application that allows different vendors to register over the app and provide the goods and services regarding printing to their consumers. On the other side user can search by city name and categories to see different kinds of goods, services, and purchase through the app. User have an amazing option to chat with the vendor via an In-app chat system and navigate to vendor store location with google maps if they have physical one. Technologies Used: Android Studio, Java, Firebase, Offline capabilities, Push Notifications, Google maps, Stripe Payment gateway.",
        aboutImage: "about.png",
      },
      {
        name: "Covid-19 Tracker",
        desc:
          "Check the number of confirmed cases, deaths and recoveries for each country.",
        imageName: "tile.jpg",
        about:
          "Covid-19 Tracker allows you to track the spread of the virus and detailed statistics for each country and the graph globally. Search for any country to see the number of confirmed cases, deaths, and recoveries. This is the first app I built using Kotlin and Navigation Components. Using Extention functions, Clean and compact syntax has been very interesting and fun to use. While I started off with the idea of this being a really small app to get familiar with building apps with Kotlin, I soon started adding more and more features as I’m sure most devs have experienced this. Technologies Used: Android Studio, Kotlin, Navigation Components, Network Programming, and Restful APIs.",
        aboutImage: "about.png",
      },
    ],
  };
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
