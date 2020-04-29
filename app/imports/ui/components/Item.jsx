import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListProfile.jsx. */
class Item extends React.Component {
  removeItem = (docId) => {
    this.props.item.remove(docId);
  }

  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={this.props.item.image}
            />
            <Card.Header>{this.props.item.firstName} {this.props.item.lastName} </Card.Header>
            <Card.Header>{this.props.item.itemName} </Card.Header>
            <Card.Meta>{this.props.item.address} </Card.Meta>
            <Card.Description>
              {this.props.item.description}
            </Card.Description>
            <div className='ui two buttons'>
              <Button basic color='red'>
                Report
              </Button>
              <Button onClick={() => this.removeItem(this.props.contact._id)}>Delete</Button>
            </div>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Item.propTypes = {
  contact: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Item);
