import React from "react";
import {Col, createResponsive, createTheme, Frame, Heading, Image, Link, Project, Row, Words} from "arwes";


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
        <Row>
          <Col s={12} m={6} l={4}>
            <Frame
                animate={true}
                level={3}
                corners={4}
                layer='success'>
              <Heading node='h2' style={{margin: 20}}><Words layer='success'>Working</Words></Heading>
              <Link href="https://github.com/OmegaRogue/TenorSharp">
                <Project animate header='TenorSharp' layer='success'>
                  TenorSharp is a C# Library for the TenorAPI. TenorSharp was made with dotNet Core 3.1 and dotNet
                  5.0.
                  <br/>
                  TenorSharp can be used to retrieve Content from Tenor without directly interfacing with the
                  Tenor REST API.
                </Project>
              </Link>
              <Link href="https://matrix-calc.omegavoid.codes">
                <Project animate header='Matrix Calc' layer='success'>
                  Matrix Calc is a simple calculator for linear Matrix equations.
                </Project>
              </Link>
              <Link href="https://github.com/OmegaVoid/Nimbatus-Mods-Rework">
                <Project animate header='Nimbatus-Mods'>
                  A Modding API for the game Nimbatus
                </Project>
              </Link>
            </Frame>
          </Col>
          <Col s={12} m={6} l={4}>
            <Frame
                animate={true}
                level={3}
                corners={4}
                layer='alert'>
              <Heading node='h2' style={{margin: 20}}><Words layer='alert'>WIP</Words></Heading>
              <Project animate header='Project GLASSES' layer='alert'>
                Custom Smartglasses, more information will come at some point
                <Image resources={{
                  small: '/GLASSES512.webp',
                  medium: '/GLASSES512.webp',
                  large: '/GLASSES.webp',
                  xlarge: '/GLASSES.webp'
                }}/>
              </Project>
              <Project animate header='OmegaDeck' layer='alert'>
                Cyberdeck
              </Project>
              <Project animate header='OmegaDial' layer='alert'>
                Custom Dial HID inspired by SpaceMouse and Surface Dial
              </Project>
            </Frame>
          </Col>

          <Col s={12} m={6} l={4}>
            <Frame
                animate={true}
                level={3}
                corners={4}
                disabled>
              <Heading node='h2' style={{margin: 20}}><Words layer='disabled'>TODO
              </Words>
              </Heading>
              <Project animate header='Project DRONE' disabled>
                WIP
              </Project>
              <Project animate header='Nerf Gauss' disabled>
                Custom Gauss rifle based Nerf Blaster
              </Project>
              <Project animate header='Project DANE' disabled>
                Custom Virtual Assistant
              </Project>
            </Frame>
          </Col>
          <Col s={12}>
            <Frame
                animate={true}
                level={3}
                corners={4}
                layer='primary'
                style={this.styles.frame}>
              <Heading node='h2' style={{margin: 20}}><Words layer='primary'>Misc</Words></Heading>
            </Frame>
          </Col>
        </Row>
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