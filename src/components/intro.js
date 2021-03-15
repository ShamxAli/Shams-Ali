import React, { Component } from 'react';
import {Typography, IconButton, Tooltip, Zoom} from '@material-ui/core';
import introStyles from "../css/intro.module.css";
import universalStyles from "../css/universal.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

class Intro extends Component {
    state = { 
        links: [{
            icon: GitHubIcon,
            link: "https://github.com/ShamxAli",
            tip: "To view my Github click this button or search ShamxAli on Github",
        },{
            icon: LinkedInIcon,
            link: "https://www.linkedin.com/in/shamsalii/",
            tip: "To view my LinkedIn profile click this button or search shamsalii on LinkedIn",
        },{
            icon: EmailIcon,
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=shamsali0404@gmail.com",
            tip: "To contact through E-mail click this button or E-mail me at shamsali0404@gmail.com",
        }]
    }
    render() { 
        return ( 
            <div id={`home`} className={`${introStyles.intro}`}>
                <div className={`d-flex flex-column flex-lg-row `}>
                    <div className={`d-flex flex-column ${introStyles.textDiv}`}>
                        <div>
                            <Typography variant="h6" gutterBottom 
                                classes={{
                                    h6: `${universalStyles.whiteCl} ${introStyles.h6Heading} ${universalStyles.font}`
                                }}
                            >
                                Passionate android developer <span className={`${introStyles.dot}`}>.</span> Music & film lover
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="caption" gutterBottom 
                                classes={{
                                    caption: `${universalStyles.greyCl} ${introStyles.subHeading} ${universalStyles.fontForText}`
                                }}
                            >
                                My name is Shams and I’m an android Developer with an insatiable appetite for learning and writing clean code all aiming to create an amazing user experience.
                            </Typography>
                        </div>
                    </div>
                    <div className={`w-100 d-flex justify-content-lg-center ${introStyles.iconDiv}`}>
                        <div className={`my-auto`}>
                            {
                                this.state.links.map(link => {
                                    return (
                                        <Tooltip key={link.link} title={link.tip} TransitionComponent={Zoom} enterDelay={1000}
                                            classes={{
                                                tooltip: `${universalStyles.tooltip}`
                                            }}
                                        >
                                            <IconButton classes={{
                                                    root: `${introStyles.iconButton}`
                                                }}
                                                onClick={() => window.open(link.link)}
                                            >
                                                <link.icon classes={{
                                                    root: `${universalStyles.whiteCl} ${universalStyles.icon}`
                                                }}/>
                                            </IconButton>
                                        </Tooltip>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Intro;