import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, List, Header, Loader, Grid, Image, Icon, GridColumn, Divider } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Items } from '../../api/item/Items';
import ListItem from './ListCategories';

/** Renders a table containing all of the Item documents. Use <StuffItem> to render each row. */
class AboutUs extends React.Component {

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
      marginTop: '20px',
    };

    const backgroundStyle = {
      backgroundImage: `url(${'/images/pattern.jpg'})`,
      backgroundSize: 'fit',
    };

    const textStyle = {
      fontSize: 'large',
    };
    return (
        <div style={backgroundStyle}>
          <Image src='/images/manoapano.jpg' fluid/>
          <Container>
            <Header as="h2" textAlign="center" style={titleStyle}>Our Team & Mission</Header>
              <Grid columns={2}>
                <GridColumn>
                  <List style={textStyle}>
                    <List.Item>
                      <Icon color='red' name='user secret'/>
                      <List.Content>
                        <List.Header as='a'>Justin Wong</List.Header>
                        <List.Description>
                          Senior Director of Technology
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Icon color='blue' name='user secret'/>
                      <List.Content>
                        <List.Header as='a'>Dean Fujimoto</List.Header>
                        <List.Description>
                          Head of Human Resources Department
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Icon color='green' name='user secret'/>
                      <List.Content>
                        <List.Header as='a'>Patima Poochai</List.Header>
                        <List.Description>
                          Director of HIM & Coding Operations
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Icon color='purple' name='user secret'/>
                      <List.Content>
                        <List.Header as='a'>Daniel Florenco</List.Header>
                        <List.Description>
                          Senior President Developer
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <Icon color='yellow' name='user secret'/>
                      <List.Content>
                        <List.Header as='a'>Andrew Emmons</List.Header>
                        <List.Description>Head of Computer Hardware Department</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </GridColumn>
                <GridColumn>
                <p style={textStyle}>Rainbow Retail is a student led initiative designed to create a safe and regulated
                  platform for the
                  buying and selling of goods. We are dedicated to reducing the dangers of meeting strangers to purchase
                  online items. All of our members are verified through university email accounts and official school id
                  photos. With Rainbow Retail, you are guaranteed a secure place to buy, sell, and exchange with hassle
                  free interactions.
                </p>
              </GridColumn>
            </Grid>
            <div>
            <Image src='/images/aloha.jpg' fluid/>
            </div>
            <Header as="h2" textAlign="center" style={titleStyle}>User Policy</Header>
            <Header as="h3" textAlign="center" style={titleStyle}>Posting</Header>
            <p style={textStyle}>Rainbow Retail strive to create friendly trading platform for everyone. Users cannot
              post items that is considered imappropriate, and inappropriate items may be deleted at any time without
              notice. Any item that is deemed offensive or defamatory towards other users will be removed as well.
            </p>

            <Header as="h3" textAlign="center" style={titleStyle}>Reporting</Header>
            <p style={textStyle}>Users must report only items that have been found to violate the Item Posting section
              of the User Policy. Any reports that contain any reason other than those listed can be invalid and removed
              from consideration. Rainbow Retail does not guarantee that every reported items will be removed from the
              site.
            </p>

            <Header as="h3" textAlign="center" style={titleStyle}>Stolen or Non-Consent Items</Header>
            <p style={textStyle}>Rainbow Retail strive to create a fair marketplace. Any items that is stolen and posted
              on the site will be removed and/or reported to the authorities. Any item that is reported by a user to be
              posted without the owner's consent will be removed from the site without notice.
            </p>
          </Container>
        </div>
    );
  }
}

/** Require an array of Item documents in the props. */
AboutUs.propTypes = {
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
})(AboutUs);
