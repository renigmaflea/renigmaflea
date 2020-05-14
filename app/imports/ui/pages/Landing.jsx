import React from 'react';
import { Container, Grid, Header, Segment, Image, Transition, Card, Menu, Button } from 'semantic-ui-react';
import HomePageCarousel from '../components/HomePageCarousel';
import HomePageUserCarousel from '../components/HomePageUserCarousel';
import { Link, NavLink } from 'react-router-dom';

// from https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
const textArray = ['electronics', 'school supplies', 'household items', 'mopeds',
  'laptops', 'textbooks', 'mini fridge', 'gaming console'];

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

    }, 3000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    const pageBG = {
      marginTop: '13px', // <-- this is neeeded when using Grid
    };
    const hookBG = {
      // Image effects
      backgroundImage: `url(${'/images/hookBG.png'})`,
      // center BG
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
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
    const featureText = {
      fontWeight: '900',
      fontSize: '30px',
      lineHeight: '0px',
      textAlign: 'center',
    };
    const featureTextButtom = {
      fontStyle: 'roboto-thin',
      fontWeight: '100',
      fontSize: '23px',
      lineHeight: '35px',
      textAlign: 'center',
    };
    const userText = {
      color: 'white',
      fontWeight: '900',
      fontSize: '30px',
      lineHeight: '0px',
      textAlign: 'center',
    };
    const userTextButtom = {
      color: 'white',
      fontStyle: 'roboto-thin',
      fontWeight: '100',
      fontSize: '23px',
      lineHeight: '35px',
      textAlign: 'center',
    };
    const askText = {
      color: 'black',
      fontFamily: 'roboto_thin',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '72px',
      lineHeight: '84px',
      // textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };
    const askTextGreen = {
      color: 'green',
      fontFamily: 'roboto_thin',
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '72px',
      lineHeight: '84px',
      // textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };

    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
        <div style={pageBG}>
          <div style={hookBG}>
            <Grid style={{ height: '94vh' }} container textAlign='center' verticalAlign='middle'>
              <Grid.Row style={{ height: '70%' }}>
                <Grid.Column width={7}>

                  <Header style={hookText}>Cheapest</Header>
                  <Segment style={{ textAlign: 'center' }}>
                    <Transition visible={this.state.visible} animation='pulse' duration={100}>
                      <Header style={hookText} color='green' content={textThatChanges}/>
                    </Transition>
                  </Segment>
                  <Header style={hookText}>near you</Header>

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
          {/* second section */}
          <div style={{ color: 'white' }}>
            <Grid style={{ height: '109vh' }} container columns='equal' textAlign='center' verticalAlign='middle'>
              <Grid.Row>

                <Grid.Column>
                    <Header style={featureText}>Buying and Selling; made easy</Header>
                  <Header style={featureTextButtom}>
                    No longer would UH Manoa students have to search several sites to buy or sell used items.
                    Rainbow Retail is an all-in-one platform created just for trading goods in the area around the
                    campus. Users can browse the wide selection of commonly sold items by fellow students.
                  </Header>
                </Grid.Column>

                <Grid.Column>
                  <HomePageCarousel/>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </div>
          {/* third section */}
          <div style={{ backgroundColor: '#2E8348' }}>
            <Grid style={{ height: '109vh' }} container columns='equal' textAlign='center' verticalAlign='middle'>
              <Grid.Row style={{ height: '30%' }} >
                <Grid.Column>
                  <Header style={userText}>Everything You Need for the Dorm Life</Header>
                  <Header style={userTextButtom}>
                    Rainbow Retail hosts all of the commonly bought and sold dorm supplies from fellow UH Students.
                    You can expect cheaper prices and easy access to the most essential items.
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ height: '60%' }}>
                <Grid.Column width={13}>
                  <HomePageUserCarousel/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          {/* forth section */}
          <div style={{ backgroundImage: `url(${'/images/pattern.jpg'})` }}>
            <Grid style={{ height: '109vh' }} container columns='equal' textAlign='center' verticalAlign='middle'>
              <Grid.Row style={{ height: '70%' }}>
                <Grid.Column>
                  <Header style={askText}>
                    Join your <span style={askTextGreen}>fellow UH students</span> in buying and selling campus goods
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{ height: '30%' }}>
                <Grid.Column>
                  <Link to={'/signup'}><Button color='green' size='massive'>Sign Up Today</Button></Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Landing;
