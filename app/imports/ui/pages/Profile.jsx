import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Image, Icon } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
//import { Stuffs } from '../../api/stuff/Stuff';
import { Items } from '../../api/item/Items';
//import StuffItem from '../components/StuffItem';

/** Renders a table containing all of the Item documents. Use <StuffItem> to render each row. */
class ListProfile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">My Profile</Header>
          <Card>
            <Image src='/images/frog.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='cart' />
                0 Items for sale
              </a>
            </Card.Content>
          </Card>
        </Container>
    );
  }
}

/** Require an array of Item documents in the props. */
ListProfile.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Item documents.
  const subscription = Meteor.subscribe('Item');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProfile);
