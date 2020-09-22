import React from "react";
import {
    createResponsive,
    createTheme,
    Paragraph, Project
} from "arwes";

import Frame from "arwes/lib/Frame";

export class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.styles = this.getTheme();
        this.responsive = createResponsive({
            getTheme: () => createTheme()
        });
    }

    render() {
        return (
            <Frame
                animate={true}
                level={3}
                corners={4}
                layer='primary'
                style={this.styles.frame}>
                <Project animate header='Omega'>
                    <Paragraph>Welcome to the Terran Empire of Omega (aka OmegaVoid)!</Paragraph>
                </Project>
            </Frame>
        );
    }


    getTheme() {
        return {
            frame: {
                margin: ".5rem auto",
                width: '90%',
                // border: "3px solid yellow",

            },
        };
    }
}

export default Home;