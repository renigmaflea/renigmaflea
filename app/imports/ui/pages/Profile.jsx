import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Image, Icon, Grid, Button, Menu, Dropdown } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Items } from '../../api/item/Items';
import Item from '../components/Item';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Item documents. Use <StuffItem> to render each row. */
class ListProfile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    //The profile page is still in some development with its editing function.


    const titleStyle = {
      color: '#0e9e71',
      textDecoration: 'underline',
      fontWeight: 'bold',
    };

    const backgroundStyle = {
      margin: '0',
      padding: '0',
      backgroundImage: `url(${'/images/pattern.jpg'})`,
      backgroundSize: 'fit',
    };

    const gridStyle = {
      paddingTop:'15px',
      height: '50%',
    };

    const container = {
      display: 'inline-block',
      position: 'relative',
    }

    const menu = {
      display: 'inline-block',
      position: 'relative',
      height: '50px',
      width: '170%',
      marginLeft: '-45%',
      paddingLeft: '10px',
    }

    const item = {
      marginTop: '10px',
      marginLeft:'-45%',
      height: '100%',
      width: '170%',
    }

    const yourItems = {
      marginTop: '5px',
      marginBottom: '5px',
      fontSize: '20px',
      fontWeight: 'bold',
      textAlign: 'center',

    }

    return (
        <div style={backgroundStyle}>
          <Container style={container} className = "clear">
            <Grid container style={gridStyle} className = "clear">
              <Grid.Row columns="two">
                <Grid.Column>
                  <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>John Foo</Card.Header>
                      <Card.Meta>
                        <span className='date'>Joined in 2020</span>
                      </Card.Meta>
                      <Card.Description>
                        Hi I'm John Foo, I mainly sell phones and textbooks.
                      </Card.Description>
                      {/*<Button size = 'mini' color='gray'><Icon name='edit'/>*/}
                      {/*  /!*<Link to={`/edit/${this.props.profile._id}`}>Edit</Link>*!/*/}
                      {/*  Edit*/}
                      {/*</Button>*/}
                    </Card.Content>
                    {/*<Card.Content extra>*/}
                    {/*  <a>*/}
                    {/*    <Icon name='cart' />*/}
                    {/*    2 Items for sale*/}
                    {/*  </a>*/}
                    {/*</Card.Content>*/}
                  </Card>
                </Grid.Column>

                <Grid.Column>
                  <Menu style={menu} centered className = "clear">
                    <p style={yourItems}>
                      Your Items
                    </p>
                  </Menu>
                  <Container>
                    <Card.Group style={item}>
                      {this.props.items.map((item, index) => <Item
                          key={index}
                          Items={Items}
                          item={item}/>)}
                    </Card.Group>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

/** Require an array of Item documents in the props. */
ListProfile.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Item documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProfile);