import React, { Component } from "react";
import {Drawer, Button, List, ListItem, Divider} from "@material-ui/core";
import navbarStyles from "../css/navbar.module.css";
import universalStyles from "../css/universal.module.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from "react-router-dom";
import Jump from "jump.js";

class Navbar extends Component {
  state = {
    links: ["home", "about", "projects", "contact"],
    linksProjectDetails: ["about"],
    drawer: false
  };

  toggleDrawer = condition => {
    this.setState({
      drawer: condition
    });
  }

  list = () => (
    <div
      role="presentation"
      onClick={() => this.toggleDrawer(false)}
      onKeyDown={() => this.toggleDrawer(false)}
    >
      <List>
        {!this.props.projectDetails ? (
          this.state.links.map((text, index) => {
            return (
              <React.Fragment key={text}>
                <ListItem>
                  <div className={`d-flex justify-content-center w-100`}>
                    <Button
                      classes={{
                        text: `${universalStyles.whiteCl} ${navbarStyles.links} ${universalStyles.outlineNone}`
                      }}
                      onClick={e => this.handleScroll(e, text)}
                    >{text}</Button>
                  </div>
                </ListItem>
                <Divider />
              </React.Fragment>)
          })
          ) : (
            <React.Fragment>
              <React.Fragment>
                <ListItem>
                  <div className={`d-flex justify-content-center w-100`}>
                    <Button
                      classes={{
                        text: `${universalStyles.whiteCl} ${universalStyles.fontForText} ${navbarStyles.links} ${universalStyles.outlineNone}`
                      }}
                      startIcon={<ArrowBackIcon classes={{
                          root: `${navbarStyles.icon}`
                      }}/>}
                      onClick={() => this.props.history.push(``)}
                    >
                      Home
                    </Button>
                  </div>
                </ListItem>
                <Divider />
              </React.Fragment>
              {
                this.state.linksProjectDetails.map((text, index) => {
                  return (
                    <React.Fragment key={text}>
                      <ListItem>
                        <div className={`d-flex justify-content-center w-100`}>
                          <Button
                            classes={{
                              text: `${universalStyles.whiteCl} ${navbarStyles.links} ${universalStyles.outlineNone}`
                            }}
                            onClick={e => this.handleScroll(e, text)}
                          >{text}</Button>
                        </div>
                      </ListItem>
                      <Divider />
                    </React.Fragment>)
                })
              }
            </React.Fragment>
          )
        }
      </List>
    </div>
  );

  handleScroll = (event, address) => {
    event.preventDefault();
    Jump("#" + address, {
      offset: -30
    });
  };

  render() {
    return (
      <div id={`navbar`} className={`${navbarStyles.navbar}`}>
          <div className={`d-flex justify-content-between`}>
            <div className={`d-flex`}>
              <div
                className={
                  `${universalStyles.whiteCl} ${navbarStyles.name} ${universalStyles.font}`
                }
              >SHAMS ALI</div>
            </div>

            <div className={`d-lg-none ${navbarStyles.drawerButton}`}>
              <Button
                classes={{
                  text: `${universalStyles.whiteCl} ${navbarStyles.links} ${universalStyles.outlineNone}`
                }}
                onClick={() => this.toggleDrawer(true)}
              >
                <MenuIcon classes={{
                    root: `${navbarStyles.icon}`
                }}/>
              </Button>
            </div>

            <Drawer 
              anchor={"right"} 
              open={this.state.drawer} 
              onClose={() => this.toggleDrawer(false)}
              classes={{paperAnchorRight: `${navbarStyles.drawerRoot} ${universalStyles.greyBg}`}}
            >
              {this.list("right")}
            </Drawer>

            <div className={`d-none d-lg-block`}>
              {
                !this.props.projectDetails ? (
                  <div className={`d-flex justify-content-around ${navbarStyles.linksDiv}`}>
                    {
                      this.state.links.map(link => {
                        return (
                          <Button key={link}
                            classes={{
                              text: `${universalStyles.whiteCl} ${universalStyles.fontForText} ${navbarStyles.links} ${universalStyles.outlineNone}`
                            }}
                            onClick={e => this.handleScroll(e, link)}
                          >{link}</Button>
                        )
                      })
                    }
                  </div>
                ) :
                (<div>
                  <div className={`d-flex justify-content-around ${navbarStyles.linksDiv}`}>
                    <Button
                        classes={{
                          text: `${universalStyles.whiteCl} ${universalStyles.fontForText} ${navbarStyles.links} ${universalStyles.outlineNone}`
                        }}
                        startIcon={<ArrowBackIcon classes={{
                            root: `${navbarStyles.icon}`
                        }}/>}
                        onClick={() => this.props.history.push(``)}
                      >
                        Home
                      </Button>
                    {
                      this.state.linksProjectDetails.map(link => {
                        return (
                          <Button key={link}
                            classes={{
                              text: `${universalStyles.whiteCl} ${navbarStyles.links} ${universalStyles.outlineNone}`
                            }}
                            onClick={e => this.handleScroll(e, link)}
                          >{link}</Button>
                        )
                      })
                    }
                  </div>
                </div>)
              }
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
