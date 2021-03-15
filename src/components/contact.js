import React, { Component } from 'react';
import {Typography, Button, Tooltip, Zoom} from '@material-ui/core';
import contactStyles from "../css/contact.module.css";
import universalStyles from "../css/universal.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

class Contact extends Component {
    state = { 
        links: [{
            icon: GitHubIcon,
            link: "https://github.com/ShamxAli",
            tip: "To view my Github click this button or search ShamxAli on Github",
            name: "View my Github"
        },{
            icon: LinkedInIcon,
            link: "https://www.linkedin.com/in/shamsalii/",
            tip: "To view my LinkedIn profile click this button or search shamsalii on LinkedIn",
            name: "Connect on LinkedIn"
        },{
            icon: EmailIcon,
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=shamsali0404@gmail.com",
            tip: "To contact through E-mail click this button or E-mail me at shamsali0404@gmail.com",
            name: "Email me"
        }]
     }
    render() { 
        return (
            <div id={`contact`} className={`mt-5`}>
                <div>
                    <Typography variant="h3" gutterBottom 
                        classes={{
                            h3: `${universalStyles.whiteCl} ${universalStyles.font} ${universalStyles.heading}`
                        }}
                    >
                        Let's connect!
                    </Typography>
                </div>
                <div className={`d-flex justify-content-lg-center ${universalStyles.componentSpaceFromHeading}`}>
                    <div className={`d-flex flex-column flex-lg-row`}>
                        {
                            this.state.links.map((button, index) => {
                                return (
                                    <div key={button.name + button.link}>
                                        <Tooltip title={button.tip} TransitionComponent={Zoom} enterDelay={1000}
                                            classes={{
                                                tooltip: `${universalStyles.tooltip}`
                                            }}
                                        >
                                            <Button 
                                                variant="contained" 
                                                startIcon={<button.icon 
                                                    classes={{
                                                        root: `${universalStyles.whiteCl} ${universalStyles.icon}`
                                                    }}
                                                />} 
                                                onClick={() => window.open(button.link)}
                                                classes = {{
                                                    contained: `${contactStyles.button} justify-content-start justify-content-lg-center ${universalStyles.whiteCl} ${universalStyles.greyBg} ${index % 2 !== 0 ? contactStyles.buttonSpacing : ""}`
                                                }}
                                            >
                                                {button.name}
                                            </Button>
                                        </Tooltip>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;