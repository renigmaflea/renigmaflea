import React from 'react';
import { Card, Image, Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Item table. See pages/ListItem.jsx. */
class TSCategoriesCard extends React.Component {


  render() {
    const textStyle = { fontWeight: '900px' };

    return (
        <Card centered>
          <Card.Content>
            <Image
                floated='right'
                size='medium'
                src={this.props.image}
            />
          </Card.Content>
          <Card.Content textAlign='center' extra style={{ fontSize: '20px' }}>
            <Link to='/listts'> {/* change to link of categories */}
              <Button color='green' fluid={true}>
                <Header as='h1' inverted={true} style={textStyle}>{this.props.name}</Header>
              </Button>
            </Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
TSCategoriesCard.propTypes = {
  name: PropTypes.object.isRequired,
  url: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(TSCategoriesCard);
