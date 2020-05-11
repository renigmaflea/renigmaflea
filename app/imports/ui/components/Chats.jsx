import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Dropdown, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link, NavLink } from 'react-router-dom';
import _ from 'underscore';
import { ChatNavBar } from '../../api/messages/ChatNavbar';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Chats extends React.Component {
  render() {
    const chatList = _.map(_.pluck(this.props.chatNavBar, 'users'), (users) => {
      // copied off of stack overflow i don't know what kind of magic they used
      const index = users.indexOf(Meteor.user().username);
      if (index > -1) {
        users.splice(index, 1);
      }
      return users.pop();
    });
    // console.log(chatList);
    return (
        this.props.chatNavBar.length === 0 ?
            <Dropdown text='Chat' pointing="top right" icon={'envelope'}>
              <Dropdown.Menu>
                <Dropdown.Item>No messages available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            :
            <Dropdown text={`Chat(${this.props.chatNavBar.length})`} pointing="top right" icon={'envelope'}>
              <Dropdown.Menu>
                <Header textAlign='center' color='green'>Recent Messages</Header>
                {chatList.map((name, index) => <Dropdown.Item
                    key={index}
                    text={name} as={NavLink} exact to={`/message/${name}`}/>)}
              </Dropdown.Menu>
            </Dropdown>
    );
  }
}

/** Require a document to be passed to this component. */
Chats.propTypes = {
  chatNavBar: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const ChatsContainer = withTracker(() => {
  const subscription = Meteor.subscribe('ChatInNavBar');
  return {
    chatNavBar: ChatNavBar.find().fetch(),
    ready: subscription.ready(),
  };
})(Chats);

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ChatsContainer);
