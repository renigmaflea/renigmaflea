import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { Items } from '../../api/item/Items';
import { Reports } from '../../api/report/Reports';
import ReportRow from '../components/ReportRow';


/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminReports extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    console.log(this.props.reports);
    const itemIDs = _.pluck(this.props.reports, 'itemID');
    console.log(itemIDs);

    const reportedItems = _.filter(this.props.items, item => _.contains(itemIDs, item.id));
    console.log(reportedItems);

    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container style={{ marginTop: '20px' }} textAlign='center'>
          <Header as='h1'>Admin Reports Listing</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Item Name</Table.HeaderCell>
                <Table.HeaderCell>Posted by</Table.HeaderCell>
                <Table.HeaderCell>Item Page</Table.HeaderCell>
                <Table.HeaderCell>Reported by</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/*{this.props.reports.map((stuff) => <StuffItem key={stuff._id} stuff={stuff} Stuffs={Stuffs}/>)}*/}
              <ReportRow/>
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
AdminReports.propTypes = {
  reports: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Reports');
  const subscription2 = Meteor.subscribe('Items');
  return {
    reports: Reports.find().fetch(),
    itmes: Items.find().fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(AdminReports);
