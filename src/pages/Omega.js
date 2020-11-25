import React from "react";
import {createResponsive, createTheme, Paragraph, Project} from "arwes";


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
            <Project animate header='The Terran Empire of Omega a.k.a. OmegaVoid'>
              <Project animate header='Army'>
                <Paragraph>Crusaders of the Terran Empire of Omega</Paragraph>
              </Project>
              <Project animate header='Elite Corps'>
                <Paragraph>The Void Squadron</Paragraph>
              </Project>
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