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
    // console.log(this.props.reports);
    const itemIDs = _.pluck(this.props.reports, 'itemID'); // get a list of reported item IDs
    console.log(itemIDs);
    // filter items that are in itemIDs
    // console.log(this.props.items);
    const reportedItems = _.filter(this.props.items, item => _.contains(itemIDs, item._id)); // works now
    // console.log(reportedItems);

    return (this.props.ready) ? this.renderPage(reportedItems) : <Loader active>Getting data</Loader>;
  }

  emptyReports() {
    if (this.props.reports.length === 0) {
      return (
          <div>
            <Header as='h2'>No Reports</Header>
            <Header as='h3'>(Report some items to see this functionality)</Header>
          </div>
      );
    }
  }

  /** Render the page once subscriptions have been received. */
  renderPage(reportedItems) {
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
                <Table.HeaderCell>Resolved Status</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                reportedItems.map((item) => <ReportRow key={item._id} item={item}
                                                       reportsArray={this.props.reports}
                                                       reportsCollection={Reports}
                />)
                /* Report prop technical debt, should change later */
              }
            </Table.Body>
          </Table>
          { this.emptyReports() }
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
  const subscription2 = Meteor.subscribe('ItemsAdmin');
  return {
    reports: Reports.find().fetch(),
    items: Items.find().fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(AdminReports);
