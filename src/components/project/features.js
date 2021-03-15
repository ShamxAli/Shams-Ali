import React, { Component } from 'react';
import {Typography, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import projectsStyles from "../../css/projects.module.css";
import universalStyles from "../../css/universal.module.css";

class Features extends Component {
    state = {
    }

    calcualteBottom = (index, number) => {
        let mod = this.props.project.features.length % number;
        let indexDifference = this.props.project.features.length - 1 - index;
        if (mod === 0){
            if (indexDifference > number-1)
                return true;
        }
        else if (indexDifference > mod-1)
            return true;
        return false;
    }

    returnClassNameForCard = index => {
        let mdBottom = this.calcualteBottom(index, 2);
        let lgBottom = this.calcualteBottom(index, 3);
        return `${universalStyles.transparentBg} ${projectsStyles.card} ${this.props.project.features.length-1 !== index ? projectsStyles.cardsm : ""} ${mdBottom ? projectsStyles.cardmdBottom : ""} ${index % 2 === 0 ? projectsStyles.cardmdright : ""} ${lgBottom ? projectsStyles.cardlgBottom : ""} ${index % 3 === 1 ? projectsStyles.cardlgY : ""}`;
    }

    render() { 
        const images = require.context("../../images", true);
        return (
            <div id={`features`} className={`mt-5`}>
                <div>
                    <Typography variant="h3" gutterBottom 
                        classes={{
                            h3: `${universalStyles.whiteCl} ${universalStyles.font} ${universalStyles.heading}`
                        }}
                    >
                        Features
                    </Typography>
                </div>
                <div className={`d-flex justify-content-center ${universalStyles.componentSpaceFromHeading}`}>
                    <div className={`d-flex flex-wrap ${projectsStyles.projectsDiv}`}>
                        {
                            this.props.project.features.map((project, index) => {
                                return (
                                    <Card
                                        key={project.name}
                                        classes={{
                                            root: this.returnClassNameForCard(index)
                                        }}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt={project.name}
                                                image={images(`./${project.imageName}`)}
                                                title={project.name}
                                                classes={{
                                                    media: `${projectsStyles.cardImage}`
                                                }}
                                            />
                                            <CardContent
                                                classes={{
                                                    root: `${universalStyles.transparentBg}`
                                                }}
                                            >
                                                <Typography 
                                                    gutterBottom 
                                                    variant="h5" 
                                                    component="h2"
                                                    classes={{
                                                        h5: `${universalStyles.whiteCl} ${universalStyles.font} ${projectsStyles.cardHeading}`
                                                    }}
                                                >
                                                    {project.name}
                                                </Typography>
                                                <Typography 
                                                    variant="body2" 
                                                    color="textSecondary" 
                                                    component="p"
                                                    classes={{
                                                        body2: `${universalStyles.greyCl} ${universalStyles.fontForText} ${projectsStyles.cardSubHeading}`
                                                    }}
                                                >
                                                    {project.desc}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Features;