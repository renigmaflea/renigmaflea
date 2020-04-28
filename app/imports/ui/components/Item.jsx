import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import AddNote from '../components/AddNote';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Item extends React.Component {
  render() {
    return (
        // <Card centered ui divided items>
        //   <Card.Content>
        //     <Image
        //         floated='left'
        //         size='medium'
        //         src={this.props.contact.image}
        //     />
        //     <Card.Header>{this.props.contact.firstName} {this.props.contact.lastName}</Card.Header>
        //     <Card.Meta>{this.props.contact.address}</Card.Meta>
        //     <Card.Description>
        //       {this.props.contact.description} <strong></strong>
        //     </Card.Description>
        //   </Card.Content>
        //
        //   <Card.Content extra>
        //     <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
        //   </Card.Content>
        //   <Card.Content extra>
        //     <Feed>
        //       {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
        //     </Feed>
        //   </Card.Content>
        //   <Card.Content extra>
        //     <AddNote owner={this.props.contact.owner} contactId={this.props.contact._id}/>
        //   </Card.Content>
        // </Card>


        <div className="ui divided one column grid items">
          <div className="row section divider">
            <div className="image">
                   <Image
                       floated='left'
                      size='medium'
                       src={this.props.contact.image}
                   />
            </div>
            <div className="content">
              <a className="header">{this.props.contact.firstName} {this.props.contact.lastName}</a>
              <div className="meta">
                <span className="cinema">{this.props.contact.address}</span>
              </div>
              <div className="description">
                <p>{this.props.contact.description} <strong></strong></p>
                <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
                {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
                <div owner={this.props.contact.owner} contactId={this.props.contact._id}/>
              </div>
              <div className="extra">
                <div className="ui label">Test long words</div>
                <div className="ui label"><i className="globe icon"></i> UH Item</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

/** Require a document to be passed to this component. */
Item.propTypes = {
  contact: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Item);
