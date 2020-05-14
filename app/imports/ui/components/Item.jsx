import React from 'react';
import { Card, Image, Feed, Icon, Button, ButtonGroup, Grid, Popup, Header, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import AddNote from '../components/AddNote';
import ContactSellerButton from './ContactSellerButton';
import ReportItemButton from './ReportItemButton';

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
      marginTop: '10px',
      borderRadius: '25px',
    };

    const imgStyle = {
      height: '150px',
      width: '150px',
      borderRadius: '25px'
    }

    const itemStyle = {
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'white',
      paddingBottom: '10px',
    }

    const priceStyle = {
      fontSize: '30px',
      paddingLeft: '10px',
      fontWeight: 'bold',
      color: 'black',
      paddingBottom: '10px',
    }

    const nameStyle = {
      fontSize: '15px',
      //fontWeight: 'bold',
      color: 'white', //can change back to be blue when clicked turn to purple
      paddingBottom: '10px',
    }

    const addressStyle = {
      fontSize: '10px',
      color: 'white',
      paddingBottom: '10px'
    }

    const descStyle = {
      fontSize: '15px',
      color: 'white',
      paddingBottom: '10px'
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

        <div style={divStyle}>
          <div>
            <div className="image">
              <Image style={imgStyle}
                     floated='left'
                     size='small'
                     src={this.props.item.image}
              />
            </div>
            <div className="content">
              <a style={itemStyle} className="header">{this.props.item.itemName}</a>
              <a style={priceStyle} className="header">{this.props.item.price}</a>
              <div className="meta">
                <a style={nameStyle} className="header">{this.props.item.firstName} {this.props.item.lastName}</a>
              </div>
              <div className="meta">
                <span style={addressStyle} className="cinema">{this.props.item.address}</span>
              </div>
              <div className="description">
                <p style={descStyle}>{this.props.item.description} <strong></strong></p>

                <Button size='mini' color='gray'><Icon name='edit'/>
                  <Link to={`/edit/${this.props.item._id}`}>Edit</Link>
                </Button>
                <Button size='mini' onClick={() => this.removeItem(this.props.item._id)}>Delete</Button>


                <Popup trigger={<Button size = 'mini' color='blue'>Share</Button>} flowing hoverable>
                  <Grid centered divided columns={3}>
                    <Grid.Column textAlign='center'>
                      <form action="https://twitter.com/intent/tweet">
                        <input type="submit" value="Twitter">
                        </input>
                      </form>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                      <form action="https://facebook.com">
                        <input type="submit" value="Facebook" />
                      </form>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                      <form action="https://instagram.com">
                        <input type="submit" value="Instagram" />
                      </form>
                    </Grid.Column>
                  </Grid>
                </Popup>

                <Link to={`/profile/${this.props.item._id}`}>
                  <Button size='mini' color='yellow' className="extra ui left floated primary button"><Icon
                      name='star'/>Buy Items</Button></Link>
                <Link to={`/profile/${this.props.item._id}`}><Button size='mini' color='yellow'><Icon
                    name='star'/>Favorite</Button></Link>
                {this.test(this.props.item.category)}

                {/*{this.props.notes.map((note, index) => <Note key={index} note={note}/>)}*/}
                <div owner={this.props.item.owner} itemID={this.props.item._id}/>
              </div>
              <div className="extra">
                <p></p>
                {/*<div style={iconStyle} className="ui label"><i className="globe icon"></i> UH Item</div>*/}
              </div>
              <div className="extra">
                <ReportItemButton itemID={this.props.item._id}/>
                <ContactSellerButton username={this.props.item.owner}/>
              </div>

            </div>
          </div>
        </div>
    );
  }

  test(category) {
    switch (category) {
      case 'Technology':
        return <Link to={`/listtc/${this.props.item._id}`}><Button size='mini' color='purple'><Icon
            name='computer'/>Technology</Button></Link>;
      case 'Transportation':
        return <Link to={`/listts/${this.props.item._id}`}><Button size='mini' color='purple'><Icon
            name='car'/>Transportation</Button></Link>;
      case 'Household Appliances':
        return <Link to={`/listhha/${this.props.item._id}`}><Button size='mini' color='purple'><Icon
            name='home'/>Household</Button></Link>;
      case 'Miscellaneous':
        return <Link to={`/listmisc/${this.props.item._id}`}><Button size='mini' color='purple'><Icon
            name='paperclip'/>Miscellaneous</Button></Link>;
      default:
        return null;
    }
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