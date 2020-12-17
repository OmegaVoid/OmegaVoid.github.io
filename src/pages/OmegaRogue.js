import React from "react";
import {Button, Col, createResponsive, createTheme, Link, Project, Row} from "arwes";

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
                    <Row>
                        <Col s={12} m={4} l={3}><Link href="https://twitter.com/realOmegaRogue"><Button animate
                                                                                                        style={this.styles.button}><i
                            className="fab fa-twitter"/> Twitter</Button></Link></Col>
                        <Col s={12} m={4} l={3}><Link
                            href="https://www.youtube.com/channel/UCaoizWP6Ab0v03viO43ZDSg"><Button animate
                                                                                                    style={this.styles.button}><i
                            className="fab fa-youtube"/> YouTube
                            Channel</Button></Link></Col>
                        <Col s={12} m={4} l={3}><Link href="http://www.twitch.tv/OmegaRogue"><Button animate
                                                                                                     style={this.styles.button}><i
                            className="fab fa-twitch"/> Twitch
                            Channel</Button></Link></Col>
                        <Col s={12} m={4} l={3}><Link href="https://github.com/OmegaRogue"><Button animate
                                                                                                   style={this.styles.button}><i
                            className="fab fa-github"/> GitHub</Button></Link></Col>
                        <Col s={12} m={4} l={3}><Link href="https://www.reddit.com/user/0megaRogue"><Button animate
                                                                                                            style={this.styles.button}><i
                            className="fab fa-reddit"/> Reddit</Button></Link></Col>
                        <Col s={12} m={4} l={3}> <Link href="https://gitlab.com/OmegaRogue"><Button animate
                                                                                                    style={this.styles.button}><i
                            className="fab fa-gitlab"/> GitLab</Button></Link></Col>
                        <Col s={12} m={4} l={3}> <Link href="https://steamcommunity.com/id/OmegaRogue2/"><Button animate
                                                                                                                 style={this.styles.button}><i
                            className="fab fa-steam"/> Steam</Button></Link></Col>
                        <Col s={12} m={4} l={3}><Link href="https://eldritchomegarogue.tumblr.com/"><Button animate
                                                                                                            style={this.styles.button}><i
                            className="fab fa-tumblr"/> Tumblr</Button></Link></Col>
                        <Col s={12} m={4} l={3}><Link href="https://omegarogue.itch.io/"><Button animate
                                                                                                 style={this.styles.button}><i
                            className="fab fa-itch-io"/> Itch.io</Button></Link></Col>

                    </Row>
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
            button: {
                textAlign: "center",
                width: "100%",
                wordWrap: "initial"

            }
        };
    }
}

export default OmegaRogue;