import React from 'react';
import './App.css';

import {
  Arwes,
  Button,
  Col,
  createResponsive,
  createSounds,
  createTheme,
  Footer,
  Header,
  Image,
  Row,
  SoundsProvider,
  ThemeProvider
} from 'arwes'

import {HashRouter, Link, Route} from "react-router-dom";

import Frame from "arwes/lib/Frame";
import Home from "./pages/Home";
import Omega from "./pages/Omega";
import OmegaRogue from "./pages/OmegaRogue";
import Others from "./pages/Others";
import Projects from "./pages/Projects";
import Links from "./pages/Links"

const sounds = {
  shared: {volume: 1},
  players: {
    click: {
      sound: {src: ['/sounds/click.mp3']},
      settings: {oneAtATime: true}
    },
    typing: {
      sound: {src: ['/sounds/typing.mp3']},
      settings: {oneAtATime: true}
    },
    deploy: {
      sound: {src: ['/sounds/deploy.mp3']},
      settings: {oneAtATime: true}
    },
  }
};


export class App extends React.Component {
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
        <React.Fragment>
          <ThemeProvider theme={createTheme()}>
            <SoundsProvider sounds={createSounds(sounds)}>
              <Arwes animate
                     background={'/images/background.webp'}
                     pattern={'/images/glow.png'}>
                <Header animate style={{textAlign: 'center'}}>
                  <Image animate
                         resources='/CoverNeon500.webp'
                      //{{
                      // small: '/CoverNeon500.webp',
                      // medium: '/CoverNeon1000.webp',
                      // large: '/CoverNeon2000.webp',
                      // xlarge: '/CoverNeonHighRes.webp'
                      // }}
                         imgProps={{
                           width: "500",
                           height: "93",
                           srcset: "/CoverNeon500.webp 500w, /CoverNeon1000.webp 1000w, /CoverNeon2000.webp 2000w, /CoverNeonHighRes.webp 3010w",
                           sizes: "(max-width: 700px) 500px, (max-width: 1700px) 1000px, (max-width: 2700px) 2000px, 3010px",
                           alt: "OmegaVoid Logo"
                         }
                         }/>
                </Header>
                <HashRouter basename='/'>
                  <nav style={this.styles.navList}>
                    <Frame
                        animate={true}
                        level={3}
                        corners={4}
                        layer='primary'>
                      <Row style={this.styles.navRow}>
                        <Col s={12} m={4} l={2} style={this.styles.navColumn}>
                          <Link to="/"><Button animate
                                               style={this.styles.button}>Home</Button></Link>
                        </Col>
                        <Col s={12} m={4} l={2} style={this.styles.navColumn}>
                          <Link to="/projects"><Button animate
                                                       style={this.styles.button}>Projects</Button></Link>
                        </Col>
                        <Col s={12} m={4} l={2} style={this.styles.navColumn}>
                          <Link to="/omegarogue"><Button animate
                                                         style={this.styles.button}>OmegaRogue</Button></Link>
                        </Col>
                        <Col s={12} m={4} l={2} style={this.styles.navColumn}>
                          <Link to="/others"><Button animate
                                                     style={this.styles.button}>Others</Button></Link>
                        </Col>
                        <Col s={12} m={4} l={2} style={this.styles.navColumn}>
                          <Link to="/omega"><Button animate
                                                    style={this.styles.button}>Omega</Button></Link>
                        </Col>
                        <Col s={12} m={4} l={2} style={this.styles.navColumn}>
                          <Link to="/links"><Button animate
                                                    style={this.styles.button}>Links</Button></Link>
                        </Col>
                        <Col s={12} m={4} l={2} style={this.styles.navColumn}>
                          <Link to="https://parts.omegavoid.codes"><Button animate
                                                                           style={this.styles.button}>Parts</Button></Link>
                        </Col>
                      </Row>
                    </Frame>
                  </nav>
                  <main>
                    <Route exact path='/' component={Home}/>
                    <Route path='/omega' component={Omega}/>
                    <Route path='/omegarogue' component={OmegaRogue}/>
                    <Route path='/others' component={Others}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/links' component={Links}/>
                  </main>
                </HashRouter>


                <Footer animate>
                  <p>&copy; OmegaVoid 2020</p>
                </Footer>


              </Arwes>
            </SoundsProvider>
          </ThemeProvider>
        </React.Fragment>
    );
  }


  getTheme() {
    return {
      navList: {
        margin: "1rem auto",
        width: '90%',
        // border: "3px solid yellow",

      },
      navColumn: {
        // border: "3px solid green",
      },
      button: {
        textAlign: "center",
        width: "100%",
        wordWrap: "initial"

      },
      navRow: {
        margin: "0.5rem",
        // border: "3px solid red",
      },
      flex: {
        flexGrow: "1",
        display: "flex",
        flexDirection: "row"
      },
      mainContent: {
        margin: '.25em',
        display: 'flex',
        justifyContent: 'space-between',
      },
      sideSection: {
        margin: '0 .5rem',
        padding: '.5rem',
      },
      centerSection: {
        margin: '0 .5rem',
        width: '82%'
      }

    };
  }
}

export default App;
