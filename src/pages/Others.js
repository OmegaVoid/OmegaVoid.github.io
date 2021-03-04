import React from "react";
import {createResponsive, createTheme, Link, Project} from "arwes";


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
            <Link href="https://www.twitch.tv/xxthelegend666xx/">
              <Project animate header='TheLegend666'>
                Check out his streams on Twitch
              </Project>
            </Link>
          </Project>
          <Project animate header='Communities'>
            <Link href="https://cyberdeck.cafe/">
              <Project animate header='The Cyberdeck Cafe'>
                The one and only cyberdeck tech blog in the verse</Project>
            </Link>
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