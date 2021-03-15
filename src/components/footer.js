import React, { Component } from 'react';
import {Typography} from '@material-ui/core';
import universalStyles from "../css/universal.module.css";
import footerStyles from "../css/footer.module.css";

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={`d-flex justify-content-center ${footerStyles.paddings}`}>
                <Typography variant="body1" gutterBottom 
                    classes={{
                        body1: `${universalStyles.whiteCl} ${footerStyles.size} ${universalStyles.fontForText}`
                    }}
                >
                    Copyrights &copy; 2020 Shams Ali.
                </Typography>
            </div>
         );
    }
}
 
export default Footer;