import React from "react";
import {Button, Col, createResponsive, createTheme, Link, Project, Row} from "arwes";

import Frame from "arwes/lib/Frame";

export class Links extends React.Component {
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
                <Project animate header='OmegaVoid on other Sites'>
                    <Row>
                        <Col s={12} m={4} l={2}>
                            <Link href="https://github.com/OmegaVoid">
                                <Button animate style={this.styles.button}>GitHub</Button>
                            </Link>
                        </Col>
                        <Col s={12} m={4} l={2}><Link href="https://twitter.com/OmegaV01d">
                            <Button animate style={this.styles.button}>Twitter</Button>
                        </Link>
                        </Col>
                        <Col s={12} m={4} l={2}>
                            <Link href="https://www.reddit.com/r/OmegaVoid">
                                <Button animate style={this.styles.button}>Subreddit</Button>
                            </Link>
                        </Col>
                        <Col s={12} m={4} l={2}>
                            <Link href="https://gitlab.com/omegavoid">
                                <Button animate style={this.styles.button}>GitLab</Button>
                            </Link>
                        </Col>
                        <Col s={12} m={4} l={2}>
                            <Link href="https://steamcommunity.com/groups/TerranEmpireOfOmega">
                                <Button animate style={this.styles.button}>Steam Group</Button>
                            </Link>
                        </Col>
                        <Col s={12} m={4} l={2}>
                            <Link href="https://discord.gg/qUuAt93">
                                <Button animate style={this.styles.button}>Discord Server</Button>
                            </Link>
                        </Col>
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

export default Links;