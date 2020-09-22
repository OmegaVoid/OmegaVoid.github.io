import React from "react";
import {
    createResponsive,
    createTheme,
    Link, Heading, Project
} from "arwes";


import Frame from "arwes/lib/Frame";

export class Others extends React.Component {
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
                <Project animate header='People'>
                    <Project animate header='TheLegend666'>
                        <Link href="https://www.twitch.tv/xxthelegend666xx/">Check out his streams on Twitch</Link>
                    </Project>
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

export default Others;