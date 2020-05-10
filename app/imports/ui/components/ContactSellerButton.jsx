import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Use this component with the item's id as a parameter to report an item */
class ContactSellerButton extends React.Component {
  render() {
    return (Meteor.user().username === this.props.username ?
            <Link to={`/message/${this.props.username}`}><Button disabled
                                                                 color='teal'>Contact Seller (self)</Button></Link> :
            <Link to={`/message/${this.props.username}`}><Button color='teal'>Contact Seller</Button></Link>
    );
  }
}

ContactSellerButton.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ContactSellerButton;
