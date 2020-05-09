import React from 'react';
import { Segment, Image, Message, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import _ from 'underscore';
import momentjs from 'moment';

const timeStyleLeft = {
  fontWeight: 'bold',
};

const timeStyleRight = {
  fontWeight: 'bold',
  textAlign: 'right',
};
const textRight = {
  textAlign: 'right',
};
const imageStyle = {
  width: '40px',
  height: '40px',
  objectFit: 'cover',
};

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AMessage extends React.Component {
  render() {
    return (this.props.buyerSide) ?
        <Grid.Row>
          <Grid.Column>
            <Image src={this.props.image} style={imageStyle} circular/>
          </Grid.Column>
          <Grid.Column width={10}>
            <div style={timeStyleLeft}>{momentjs(this.props.message.createdAt).fromNow()}</div>
            {this.props.message.message}
          </Grid.Column>
        </Grid.Row>
        :
        <Grid.Row>
          <Grid.Column floated='right' width={10}>
            <div style={timeStyleRight}>{momentjs(this.props.message.createdAt).fromNow()}</div>
            <div style={textRight}>{this.props.message.message}</div>
          </Grid.Column>
          <Grid.Column>
            <Image src={this.props.image} style={imageStyle} size='mini' circular/>
          </Grid.Column>
        </Grid.Row>;
  }
}

/** Require a document to be passed to this component. */
AMessage.propTypes = {
  buyerSide: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default AMessage;
