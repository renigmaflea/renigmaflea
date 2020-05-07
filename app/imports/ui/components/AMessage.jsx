import React from 'react';
import { Button, Table, Icon, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import _ from 'underscore';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AMessage extends React.Component {

  render() {
    return (
        <Feed.Event>
          <Feed.Label image='/images/users/user4.jpg' />
          <Feed.Content>
            <Feed.Summary>
              <a>Joe Henderson</a> posted on his page
              <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              Ours is a life of constant reruns. We're always circling back to where
              we'd we started, then starting all over again. Even if we don't run
              extra laps that day, we surely will come back for more of the same
              another day soon.
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />5 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
    );
  }
}

/** Require a document to be passed to this component. */
AMessage.propTypes = {
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default AMessage;
