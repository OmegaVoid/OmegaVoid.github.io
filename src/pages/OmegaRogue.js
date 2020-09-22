import React from "react";
import {
    createResponsive,
    createTheme, Paragraph,
    Heading,
    Link, Project
} from "arwes";

import Frame from "arwes/lib/Frame";

export class OmegaRogue extends React.Component {
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
                <Project animate header='Me on other Sites'>
                    <Link href="https://www.youtube.com/channel/UCaoizWP6Ab0v03viO43ZDSg">Youtube</Link>
                    <br/>
                    <Link  href="https://www.twitch.tv/omegarogue">Twitch</Link>
                    <br/>
                    <Link  href="https://www.reddit.com/user/0megaRogue">Reddit</Link>
                    <br/>
                    <Link  href="https://www.reddit.com/r/OmegaVoid">r/OmegaVoid</Link>
                    <br/>
                    <Link  href="https://steamcommunity.com/id/OmegaRogue2/">Steam</Link>
                    <br/>
                    <Link  href="https://steamcommunity.com/groups/OmegaRoguesGroup">Steam Group</Link>
                    <br/>
                    <Link  href="https://github.com/OmegaRogue">GitHub</Link>
                    <br/>
                    <Link  href="https://minecraft.curseforge.com/members/OmegaRogue">CurseForge</Link>
                    <br/>
                    <Link  href="https://twitter.com/realOmegaRogue">Twitter</Link>
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

export default OmegaRogue;