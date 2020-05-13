import React from 'react';
import { Container, Grid, Header, Segment, Image, Transition } from 'semantic-ui-react';

// from https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
const textArray = ['electronics', 'school supplies', 'household items', 'mopeds', 'laptops'];

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textIdx: 0,
      visible: true,
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1, visible: false });

      setTimeout(function () { //Start the timer
        this.setState({ visible: true }) //After 1 second, set render to true
      }.bind(this), 100);

    }, 5000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    const pageBG = {
      // backgroundImage: `url(${'/images/pattern.jpg'})`,
      marginTop: '13px', // <-- this is neeeded when using Grid
    };
    const hookBG = {
      // Image effects
      backgroundImage: `url(${'/images/hookBG.png'})`,
      // background: `linear-gradient(180deg,
      // rgba(145, 208, 140, 0.83) 0%, rgba(255, 255, 255, 0) 100%), url(${'/images/hookBG.jpg'})`,
      // filter: 'blur(3px)',
      // center BG
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      // remove blur edges
      // transform: 'scale(1.01)',
    };
    const hookText = {
      fontFamily: 'roboto_thin',
      fontStyle: 'italic',
      fontWeight: 'lighter',
      fontSize: '48px',
      lineHeight: '56px',
      textAlign: 'center',
      color: 'white',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };
    const hookTextButtom = {
      fontFamily: 'roboto_thin',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: '72px',
      lineHeight: '84px',
      textAlign: 'center',
      color: 'white',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };

    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
        <div style={pageBG}>
          <div style={hookBG}>
            <Grid style={{ height: '100vh' }} container textAlign='center' verticalAlign='middle'>
              <Grid.Row style={{ height: '70%' }}>
                <Grid.Column width={7}>

                  <Header style={hookText}>Cheapest</Header>
                  <Segment style={{ textAlign: 'center' }}>
                    <Transition visible={this.state.visible} animation='pulse' duration={100}>
                      <Header style={hookText} color='green' content={textThatChanges}/>
                    </Transition>
                  </Segment>
                  <Header style={hookText}>in your own backyard</Header>

                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Header style={hookTextButtom}></Header> {/* Just for the blank space */}
              </Grid.Row>
              <Grid.Row>
                <Header style={hookTextButtom}>Rainbow Retail</Header>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Landing;
