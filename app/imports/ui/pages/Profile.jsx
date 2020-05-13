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
      margin: '0',
      padding: '0',
      paddingTop:'15px',
      height: '50%',
    };

    const container = {
      float: 'left',
    }

    const menu = {
      float: 'left',
      height: '3%',
      width: '175%',
      marginLeft: '-30%',
    }

    return (
        <div style={backgroundStyle}>
        <Container style={container}>
          <Grid container style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.Column>
          <Card>
            <Image src='/images/users/justinuser.jpg' wrapped ui={false}/>
            <Card.Content>
              <Card.Header>Justin</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Justin is a musician living in Nashville.
              </Card.Description>
              <Button size = 'mini' color='gray'><Icon name='edit'/>
                {/*<Link to={`/edit/${this.props.profile._id}`}>Edit</Link>*/}
                Edit
              </Button>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='cart' />
                0 Items for sale
              </a>
            </Card.Content>
          </Card>
              </Grid.Column>

                <Grid.Column>
                <Menu style={menu} centered>
                    <Menu.Item>
                      <Dropdown item text="Listed Items">
                        <Dropdown.Menu>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Item>
                </Menu>
              </Grid.Column>

              <Container>
                <Header as="h2" textAlign="center">Hello World</Header>
                <Card.Group>
                  {this.props.items.map((item, index) => <Item
                      key={index}
                      Items={Items}
                      item={item}/>)}
                </Card.Group>
              </Container>

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
