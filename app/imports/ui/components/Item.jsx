import React from 'react';
import { Card, Image, Feed, Icon, Button, ButtonGroup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import AddNote from '../components/AddNote';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Item extends React.Component {
  removeItem = (docId) => {
    this.props.Items.remove(docId);
  }

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
          <Card.Content>
            <ButtonGroup size='mini'>
              <Link to={`/profile/${this.props.item._id}`}><Button color='yellow'><Icon
                  name='star'/>Favorite</Button></Link>
              <Link to={`/profile/${this.props.item._id}`}><Button color='blue'><Icon
                  name='share square'/>Share</Button></Link>
              <Link to={`/profile/${this.props.item._id}`}><Button color='gray'><Icon
                  name='edit'/>Edit</Button></Link>
              <Button color='red' onClick={() => this.removeItem(this.props.item._id)}>Delete</Button>
            </ButtonGroup>
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
  Items: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,

};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Item);
