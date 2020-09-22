import React from "react";
import {
    createResponsive,
    createTheme,
    Project
} from "arwes";

import Frame from "arwes/lib/Frame";

export class Projects extends React.Component {
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
                <Project animate header='Lorem ipsum'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Project>
                <Project animate header='Lorem ipsum'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Project>
                <Project animate header='Lorem ipsum'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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

export default Projects;