import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Divider, Header, Loader, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Items } from '../../api/item/Items';
import HHACategoriesCard from '../components/HHACategoriesCard';
import TCCategoriesCard from '../components/TCCategoriesCard';
import TSCategoriesCard from '../components/TSCategoriesCard';
import MISCCategoriesCard from '../components/MISCCategoriesCard';

/** Renders a table containing all of the Item documents. Use <StuffItem> to render each row. */
class ListItem extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const titleStyle = {
      color: '#0e9e71',
      textDecoration: 'underline',
      fontWeight: 'bold',
    };

    const backgroundStyle = {
      backgroundImage: `url(${'/images/pattern.jpg'})`,
      backgroundSize: 'fit',
    };

    return (
        <div style={backgroundStyle}>
          <Container>
            <Divider hidden/>
            <Header as='h1' textAlign='center' style={titleStyle}>Categories</Header>
            <Card.Group> {/* replace with actual collection mapping */}
              <TSCategoriesCard name='Transportation' url='moped' image='/images/categoriesPic/bike.jpg'/>
              <HHACategoriesCard name='Household Appliances' url='minifridge' image='/images/categoriesPic/minifridge.jpeg'/>
              <TCCategoriesCard name='Technology' url='mac' image='/images/categoriesPic/mac.jpg'/>
              <MISCCategoriesCard name='Miscellaneous' url='server' image='/images/categoriesPic/server.jpg'/>
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Item documents in the props. */
ListItem.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Item documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListItem);