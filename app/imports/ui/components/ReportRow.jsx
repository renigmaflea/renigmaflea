import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import swal from 'sweetalert';
import _ from 'underscore';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ReportRow extends React.Component {
  statusIcon(status) {
    return (status) ? <Icon name='times'/> : <Icon name='check'/>;
  }

  onResolve(reportsID) {
    this.props.reportsCollection.update(reportsID, { $set: { open: false } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Report resolved', 'success')));
  }

  render() {
    console.log('Inside Row');
    // console.log(this.props.item);
    // the item
    const item = this.props.item;
    // this line extract the report that the item is in
    const ItemsReport = _.find(this.props.reportsArray, (report) => report.itemID === this.props.item._id);
    console.log(ItemsReport);
    // console.log(this.props.reportsCollection);
    return (
        <Table.Row>
          <Table.Cell>Item name is &quot;{item.address}&quot; (address) for now</Table.Cell>
          <Table.Cell>{item.firstName} {item.lastName}</Table.Cell>
          <Table.Cell><Link to={'/'}>
            <Button>Link</Button>
          </Link>
          </Table.Cell>
          <Table.Cell>{ItemsReport.reporter}</Table.Cell>
          <Table.Cell>{this.statusIcon(ItemsReport.open)}</Table.Cell>
          <Table.Cell>
            <Button color='green' onClick={() => this.onResolve(ItemsReport._id)}>Mark as Resolved</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReportRow.propTypes = {
  item: PropTypes.object.isRequired,
  reportsArray: PropTypes.array.isRequired,
  reportsCollection: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReportRow);
