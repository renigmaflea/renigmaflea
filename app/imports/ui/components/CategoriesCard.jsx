import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class CategoriesCard extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image
                floated='right'
                size='mini'
            />
            <Card.Header>Header</Card.Header>
            <Card.Meta>Meta</Card.Meta>
            <Card.Description>
              Description
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>Test</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
CategoriesCard.propTypes = {
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(CategoriesCard);
