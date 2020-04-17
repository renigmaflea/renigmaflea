import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, List, Header, Loader, Grid, ListItem, Icon, GridColumn } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import StuffItem from '../components/StuffItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListStuff extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Our Team and Mission</Header>
          <Grid columns={2} >
            <GridColumn>
          <List>
            <List.Item>
              <Icon color='red' name='user' />
              <List.Content>
                <List.Header as='a'>Justin Wong</List.Header>
                <List.Description>
                  Senior Director of Technology
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon color='blue' name='user' />
              <List.Content>
                <List.Header as='a'>Dean Fujimoto</List.Header>
                <List.Description>
                  Head of Human Resources Department
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon color='green' name='user' />
              <List.Content>
                <List.Header as='a'>Patima Poochai</List.Header>
                <List.Description>
                  Director of HIM & Coding Operations
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon color='purple' name='user' />
              <List.Content>
                <List.Header as='a'>Daniel FLorenco</List.Header>
                <List.Description>
                  Senior President Developer
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Icon color='yellow' name='user' />
              <List.Content>
                <List.Header as='a'>Andrew Emmons</List.Header>
                <List.Description>Head of Computer Hardware Department</List.Description>
              </List.Content>
            </List.Item>
          </List>
            </GridColumn>
            <GridColumn>
              <p>Our goal was to create a safe and regulated trading platform designed for college students. Other trading websites and forums....</p>
            </GridColumn>
          </Grid>
          <Header as="h2" textAlign="center">User Policy</Header>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListStuff.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListStuff);
