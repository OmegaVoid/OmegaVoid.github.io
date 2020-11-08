import React from "react";
import {
    createResponsive,
    createTheme, Link,
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
                <Link href="https://github.com/OmegaVoid/Nimbatus-Mods-Rework">
                    <Project animate header='Nimbatus-Mods'>
                        A Modding API for the game Nimbatus
                    </Project>
                </Link>

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