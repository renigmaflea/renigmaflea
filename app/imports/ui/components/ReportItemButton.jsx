import React from 'react';
import { Button } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Use this component with the item's id as a parameter to report an item */
class ReportItemButton extends React.Component {
  render() {
    return (
        <Link to={`/report/${this.props.itemID}`}><Button color='red'>Report this item</Button></Link>
    );
  }
}

ReportItemButton.propTypes = {
  itemID: PropTypes.string.isRequired,
};

export default ReportItemButton;
