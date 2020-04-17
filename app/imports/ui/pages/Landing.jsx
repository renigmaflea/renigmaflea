import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <Image fluid src="/images/UHbackground.png"/>
        </div>

    );
  }
}

export default Landing;
