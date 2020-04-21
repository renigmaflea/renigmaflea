import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ReportRow extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>PlaceHolderItem</Table.Cell>
          <Table.Cell>john@foo.com</Table.Cell>
          <Table.Cell><Link to={''}>
            <Button>Link</Button>
          </Link></Table.Cell>

          <Table.Cell>namehere</Table.Cell>
          <Table.Cell>Open</Table.Cell>
          <Table.Cell><Link to={''}>
            <Button>Close</Button>
          </Link></Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReportRow.propTypes = {
  // item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ReportRow);
