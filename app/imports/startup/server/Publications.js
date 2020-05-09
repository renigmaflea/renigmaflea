import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import SimpleSchema from 'simpl-schema';
import { Items } from '../../api/item/Items';
import { Reports } from '../../api/report/Reports';
import { Categories } from '../../api/categories/Categories';
import { Messages } from '../../api/messages/Messages';

const MAX_TODOS = 10;

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Items', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Items.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish('ItemsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Items.find();
  }
  return this.ready();
});

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Items', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Items.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ItemsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Items.find();
  }
  return this.ready();
});


/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('Reports', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Reports.find();
  }
  return this.ready();
});

/** Publishes categories to logged in users */
Meteor.publish('Categories', function publish() {
  if (this.userId) {
    return Categories.find();
  }
  return this.ready();
});

/** Publishes a user's related messages */
Meteor.publish('ThemMessages', function publish(otherUser) {
  if (this.userId) {
    const options = {
      sort: { createdAt: 1 },
    };

    const username = Meteor.users.findOne(this.userId).username;
    return Messages.find({
      $or: [
        { $and: [{ sender: otherUser }, { receiver: username }] },
        { $and: [{ sender: username }, { receiver: otherUser }] }
      ]
    }, options);
    // ^ looks for messages that is related to the user ( to/from username )
  }
  return this.ready();
});
