import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Header, Image, Label, Segment } from 'semantic-ui-react';

class HomePageCarousel extends React.Component {
  render() {
    return (
        <CarouselProvider
            naturalSlideWidth={110}
            naturalSlideHeight={70}
            totalSlides={3}
            isPlaying
        >
          <Slider>
            <Slide index={0}>
              <Segment style={{ boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)' }}>
                <Image src='images/chatScreenshot.png' fluid/>
                <Label Huge attached='bottom'><Header color='green'>Negotiate prices with a potential seller</Header></Label>
              </Segment>
            </Slide>
            <Slide index={1}>
              <Segment style={{ boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)' }}>
                <Image src='images/categories.png' fluid/>
                <Label Huge attached='bottom'><Header color='green'>Look at our wide range of goods</Header></Label>
              </Segment>
            </Slide>
            <Slide index={2}>
              <Segment style={{ boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)' }}>
                <Image src='images/postitem.png' fluid/>
                <Label Huge attached='bottom'><Header color='green'>Easily list your itme to the entire campus</Header></Label>
              </Segment>
            </Slide>
          </Slider>
          <Dot slide={0}/>
          <Dot slide={1}/>
          <Dot slide={2}/>
        </CarouselProvider>
    );
  }
}

export default HomePageCarousel;