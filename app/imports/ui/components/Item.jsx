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

    const divStyle = {
      background: '#2d8757',
      width: '100%',
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '35px',
      borderRadius: '25px'
    };

    const imgStyle = {
      height: '200px',
      width: '200px',
      borderRadius: '25px'
    }

    const nameStyle = {
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'white', //can change back to be blue when clicked turn to purple
      paddingBottom: '15px'
    }

    const addressStyle = {
      fontSize: '10px',
      color: 'white',
      paddingBottom: '15px'
    }

    const descStyle = {
      fontSize: '20px',
      color: 'white',
      paddingBottom: '15px'
    }

    const editStyle = {
      fontSize: '20px',
      color: 'white', //can change back to be blue when clicked turn to purple
      paddingBottom: '25px'
    }

    const iconStyle = {
      //paddingTop: '25px',
      //paddingBottom: '10px'
    }

    const buttonStyle = {
      float: 'left'
    }

    return (

        // <Card centered ui divided items>
        //       <Card.Content>
        //         <Image
        //             floated='left'
        //             size='medium'
        //             src={this.props.contact.image}
        //         />
        //         <Card.Header>{this.props.contact.firstName} {this.props.contact.lastName}</Card.Header>
        //         <Card.Meta>{this.props.contact.address}</Card.Meta>
        //         <Card.Description>
        //           {this.props.contact.description} <strong></strong>
        //         </Card.Description>
        //       </Card.Content>
        //
        //       <Card.Content extra>
        //         <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
        //       </Card.Content>
        //       <Card.Content extra>
        //         <Feed>
        //           {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
        //         </Feed>
        //       </Card.Content>
        //       <Card.Content extra>
        //         <AddNote owner={this.props.contact.owner} contactId={this.props.contact._id}/>
        //       </Card.Content>
        //     </Card>


        <div style={divStyle} className="ui divided one column grid items">
          <div className="row section divider">
            <div className="image">
              <Image style={imgStyle}
                     floated='left'
                     size='small'
                     src={this.props.item.image}
              />
            </div>
            <div className="content">
              <a style={nameStyle} className="header">{this.props.item.firstName} {this.props.item.lastName}</a>
              <div className="meta">
                <span style={addressStyle} className="cinema">{this.props.item.address}</span>
              </div>
              <div className="description">
                <p style={descStyle} >{this.props.item.description} <strong></strong></p>

                <Button size = 'mini' color='gray'><Icon name='edit'/>
                  <Link to={`/edit/${this.props.item._id}`}>Edit</Link>
                </Button>
                <Button size = 'mini' onClick={() => this.removeItem(this.props.item._id)}>Delete</Button>

                {/*{this.props.notes.map((note, index) => <Note key={index} note={note}/>)}*/}
                <div owner={this.props.item.owner} itemID={this.props.item._id}/>
              </div>
              <div className="extra">
                <p></p>
                <div style={iconStyle} className="ui label"><i className="globe icon"></i> UH Item</div>
              </div>
              <Link to={`/profile/${this.props.item._id}`}>
                <p></p>
                <Button size = 'mini' color='yellow' className="extra ui left floated primary button"><Icon
                    name='star'/>Buy Items</Button></Link>

              <Link to={`/profile/${this.props.item._id}`}><Button size = 'mini' color='yellow'><Icon
                  name='star'/>Favorite</Button></Link>
              <Link to={`/profile/${this.props.item._id}`}><Button size = 'mini' color='blue'><Icon
                  name='share square'/>Share</Button></Link>

            </div>
          </div>
        </div>
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