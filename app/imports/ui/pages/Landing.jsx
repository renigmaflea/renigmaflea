import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {

    const titleStyle = {
      color: '#024731',
      fontWeight: 'bold',
      fontSize: '40px',
      marginTop: '0px',
  };
    const textStyle = {
      color: '#024731',
      fontSize: '22px',

    };

    return (
        <div className="bg">
          <Container >
            <Header as="h1" textAlign="center" style={titleStyle} >Welcome to Rainbow Retail</Header>
            <Grid container verticalAlign="middle">
              <Grid.Row columns="two">
                <Grid.Column width={10}>
                  <div className="slide-container">

                  </div>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as="h3" style={textStyle}>
                    If you love finding deals or making some extra money without all the
                    dangers of websites like craigslist, Rainbow Retailers is the place for you! All UH student or
                    facilty are welcome. Here at Rainbow Retailers we only accept current members of the UH
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    community so you'll always know who you're buying from.
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Container>
        </div>

    );
  }
}

export default Landing;
