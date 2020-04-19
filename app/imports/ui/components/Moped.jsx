import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Moped extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>

            <Card.Header>{this.props.moped.firstName} {this.props.moped.lastName}</Card.Header>
            <Card.Meta>{this.props.moped.address}</Card.Meta>
            <Card.Description>
              {this.props.moped.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Moped.propTypes = {
  moped: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Moped);
