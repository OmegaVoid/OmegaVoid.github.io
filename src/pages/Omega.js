import React from "react";
import {createResponsive, createTheme, List, Paragraph, Project, Words} from "arwes";


import Frame from "arwes/lib/Frame";

export class Omega extends React.Component {
  constructor() {
    super(...arguments);
    this.styles = this.getTheme();
    this.responsive = createResponsive({
      getTheme: () => createTheme()
    });
    this.state = {size: this.responsive.get().status};
    this.listener = this.responsive.on(state => {
      console.log(state);
      this.setState({size: state.status});
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
            <Words animate layer='alert'>This Page is WIP. It is just a quick writeup to give a better explanation of
              what Omega is, and to get a bit of lore about Omega out</Words>
            <Paragraph>
              <Words animate>
                Omega is a Big Tech Corporation and Government of the Cyberpunk world.
              </Words>
              <br/>
              <Words animate>
                Omega started out as being a small,
                independent manufacturer of Cyberdecks and Cybergear,
                making a statement against Big Tech.
              </Words>
              <br/>
              <Words animate>
                As Omega grew and grew in popularity with Independent Deckers and Runners,
                it turned into the type of Company they originally opposed.
              </Words>
              <br/>
              <Words animate>
                Despite this shift in Status,
                they try to uphold the image of being an „alternative“ to the big tech manufacturers,
              </Words>
              <br/>
              <Words animate>
                while in the background they start taking over Governments intent on taking over the
                world.
              </Words>
            </Paragraph>
            <Paragraph>

              <List node='ul'>
                <li><Words animate>The Terran Empire of Omega (TEO) is the tech state Omega is creating</Words></li>
                <li><Words animate>The Crusaders of the Terran Empire of Omega (CTEO) are the military division of the
                  Terran Empire of Omega</Words>
                  <li><Words animate>The Elite Corps of the CTEO is the Void Squadron</Words></li>
                </li>
                <li><Words animate>The high ranking members of Omega are the Intergalactic Division</Words>
                </li>
                <li><Words animate>OmegaRogue and OmegaLord are respectively Grand Emperor and Vice Grand Emperor of
                  Omega, in practice holding the same position, but with slightly different titles.</Words></li>
                <li><Words animate>XT-RRD is the Capital of Omega</Words></li>
              </List>
            </Paragraph>
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
      sideSection: {
        margin: '0 .5rem',
        padding: '.5rem',
      },
      centerSection: {
        margin: '0 .5rem',
        width: '82%'
      },
      mainContent: {
        margin: '.25em',
        display: 'flex',
        justifyContent: 'space-between'


      }
    };
  }
}

export default Omega;