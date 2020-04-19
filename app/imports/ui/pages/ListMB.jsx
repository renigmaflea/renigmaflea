import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Grid, ListItem, Icon, GridColumn } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Moped from '/imports/ui/components/Moped';
import { Items } from '../../items/Items';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListMB extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Here are our Macbooks:</Header>
          <Card.Group>
            {this.props.items.map((moped, index) => <Moped key={index} moped={moped}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListMB.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({category: 'Macbook'}).fetch(),
    ready: subscription.ready(),
  };
})(ListMB);
