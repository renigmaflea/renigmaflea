import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */




/** Standard Card */
class SC extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>

            <Card.Header>{this.props.sc.firstName} {this.props.sc.lastName}</Card.Header>
            <Card.Meta>{this.props.sc.address}</Card.Meta>
            <Card.Description>
              {this.props.sc.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
SC.propTypes = {
  sc: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(SC);
