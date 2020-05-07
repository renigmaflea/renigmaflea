import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Items } from '../../api/item/Items';
import { Reports } from '../../api/report/Reports';
import { Categories } from '../../api/categories/Categories';
import { Messages } from '../../api/messages/Messages';

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

/** Publishes a user's outgoing messages */
Meteor.publish('MessagesSend', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Messages.find({ sender: username });
  }
  return this.ready();
});

/** Publishes a user's outgoing messages */
Meteor.publish('MessagesReceive', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Messages.find({ receiver: username });
  }
  return this.ready();
});
