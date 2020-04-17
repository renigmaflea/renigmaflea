import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import AddNote from '../components/AddNote';

/** Renders a single row in the List Item table. See pages/ListItems.jsx. */
class Item extends React.Component {
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
              {this.props.item.description} <strong></strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.item._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <Feed>
              {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
            </Feed>
          </Card.Content>
          <Card.Content extra>
            <AddNote owner={this.props.item.owner} itemId={this.props.item._id}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Item.propTypes = {
  item: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Item);
