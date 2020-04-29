import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Divider, Header, Loader, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Categories } from '../../api/categories/Categories';
import CategoriesCard from '../components/CategoriesCard';
import Item from '../components/Item';
import { Items } from '../../api/item/Items';

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

    console.log(this.props.categories);

    return (
        <div style={backgroundStyle}>
          <Container>
            <Divider hidden/>
            <Header as='h1' textAlign='center' style={titleStyle}>Categories</Header>
            <Card.Group> {/* replace with actual collection mapping */}
              {this.props.categories.map((category, index) => <CategoriesCard key={index} category={category}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Item documents in the props. */
ListItem.propTypes = {
  categories: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Categories');
  return {
    categories: Categories.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListItem);
