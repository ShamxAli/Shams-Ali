import React, { Component } from 'react';
import {Fab} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import universalStyles from "../css/universal.module.css";
import Jump from "jump.js";

class UpButton extends Component {
    state = { 
        yOffset: 0
     }
    componentDidMount() {
     window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        this.setState({
          yOffset: window.pageYOffset,
        })
      }

    handleScroll = event => {
        event.preventDefault();
        Jump("#navbar", {
            offset: -30
        });
    };

    render() { 
        return (
            <React.Fragment>
                <Fab 
                    color="primary" 
                    aria-label="add"
                    style={{ position: 'fixed', bottom: '40px', right: '30px' }}
                    classes={{
                        root: `${this.state.yOffset > 600 ? "d-block" : "d-none"} ${universalStyles.greyBg} ${universalStyles.outlineNone}`
                    }}
                    onClick={e => this.handleScroll(e)}
                >
                    <ArrowUpwardIcon />
                </Fab>
            </React.Fragment>
         );
    }
}
 
export default UpButton;