import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Card, Header, Image } from 'semantic-ui-react';

class HomePageUserCarousel extends React.Component {
  render() {
    return (
        <CarouselProvider
            naturalSlideWidth={235}
            naturalSlideHeight={125}
            totalSlides={2}
            isPlaying
        >
          <Slider>
            <Slide index={0}>
              <Card.Group centered>
                <Card>
                  <Card.Content>
                    <Image
                        floated='left'
                        size='mini'
                        src='images/users/user4.jpg'
                        circular
                    />
                    <Card.Header>Erik Chevre</Card.Header>
                    <Card.Meta>is listing</Card.Meta>
                    <Image src='images/items/iPad.jpg'/>
                  </Card.Content>
                  <Card.Content extra>
                    <Header color='green'>iPad</Header>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Image
                        floated='left'
                        size='mini'
                        src='images/users/gunwookuser.PNG'
                        circular
                    />
                    <Card.Header>Bruce Canberra</Card.Header>
                    <Card.Meta>is listing</Card.Meta>
                    <Image src='images/items/gamingcomputer.jpg'/>
                  </Card.Content>
                  <Card.Content extra>
                    <Header color='green'>Bitcoin Mining Machine</Header>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Image
                        floated='left'
                        size='mini'
                        src='images/users/user2.jpg'
                        circular
                    />
                    <Card.Header>Anabelle Bettina</Card.Header>
                    <Card.Meta>is listing</Card.Meta>
                    <Image src='images/items/minifan.JPG'/>
                  </Card.Content>
                  <Card.Content extra>
                    <Header color='green'>Mini Fan</Header>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Slide>
            <Slide index={1}>
              <Card.Group centered>
                <Card>
                  <Card.Content>
                    <Image
                        floated='left'
                        size='mini'
                        src='images/users/user1.png'
                        circular
                    />
                    <Card.Header>Mac Walker</Card.Header>
                    <Card.Meta>is listing</Card.Meta>
                    <Image src='images/items/minifridge.JPG'/>
                  </Card.Content>
                  <Card.Content extra>
                    <Header color='green'>Mini Fridge</Header>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Image
                        floated='left'
                        size='mini'
                        src='images/users/Matt.jpg'
                        circular
                    />
                    <Card.Header>Roald Keaton</Card.Header>
                    <Card.Meta>is listing</Card.Meta>
                    <Image src='images/items/nintendoswitch.jpg'/>
                  </Card.Content>
                  <Card.Content extra>
                    <Header color='green'>Nintendo Switch</Header>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Image
                        floated='left'
                        size='mini'
                        src='images/users/matthewuser.PNG'
                        circular
                    />
                    <Card.Header>Louie Tybalt</Card.Header>
                    <Card.Meta>is listing</Card.Meta>
                    <Image src='images/Daniel Sale Items/Daniel_Surfboard.jpeg'/>
                  </Card.Content>
                  <Card.Content extra>
                    <Header color='green'>Surfboard</Header>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Slide>
          </Slider>
          <Dot slide={0}/>
          <Dot slide={1}/>
        </CarouselProvider>
    );
  }
}

export default HomePageUserCarousel;