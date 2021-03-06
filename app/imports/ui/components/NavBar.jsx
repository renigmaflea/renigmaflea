import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Divider } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import Chats from './Chats';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { backgroundColor: '#024731', fontSize: '18px', fontFamily: 'Montserrat'};
    const itemStyle = { margin: '0px', padding: '0px' };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/" style={itemStyle}>
          {/* <Header style={itemStyle} className="logo" inverted as='h1'>RenigmaFlea</Header> */}
          <Image src='/images/rrlogo.png' size='small'/>
        </Menu.Item>
        {this.props.currentUser ? (
            [<Menu.Item as={NavLink} activeClassName="active" exact to="/" key='add'>Home</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/listcat" key='add'>Categories</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>Post Item</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>All Items</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/profile" key='add'>My Profile</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/about" key='about'>About Us</Menu.Item>,
              // <Menu.Item as={NavLink} activeClassName="active" exact to="/lucky" key='lucky'>Feeling Lucky</Menu.Item>
            ]

          ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            [<Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact
                       to="/adminreports" key='adminReports'>Reports</Menu.Item>]
        ) : ''}

        <Menu.Item position="right">
          {this.props.currentUser === '' ? ('') : (
              <Chats/>
          )}
        </Menu.Item>

        <Menu.Item>
          {this.props.currentUser === '' ? (
            <Dropdown text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
