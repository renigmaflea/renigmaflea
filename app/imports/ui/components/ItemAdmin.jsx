import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ItemAdmin extends React.Component {
  render() {
    return (
        // centered maybe not needed
        <Card centered>
          <Card.Content>
            <Image
                floated='right'
                size='mini'
                src={this.props.item.image}
            />
            <Card.Header>{this.props.item.firstName} {this.props.item.lastName}</Card.Header>
            <Card.Meta>{this.props.item.address}</Card.Meta>
            <Card.Description>
              {this.props.item.description} <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.item.owner}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ItemAdmin.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ItemAdmin);
