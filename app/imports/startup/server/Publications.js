import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Contacts } from '../../api/contact/Contacts';
import { Items } from '../../api/item/Items';
import { Notes } from '../../api/note/Notes';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Items', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Items.find({ owner: username });
  }
  return this.ready();
});

// /** This subscription publishes only the documents associated with the logged in user */
// Meteor.publish('Contacts', function publish() {
//   if (this.userId) {
//     const username = Meteor.users.findOne(this.userId).username;
//     return Items.find({ owner: username });
//   }
//   return this.ready();
// });
//
// /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
// Meteor.publish('ContactsAdmin', function publish() {
//   if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
//     return Items.find();
//   }
//   return this.ready();
// });

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ItemAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Items.find();
  }
  return this.ready();
});

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Notes', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Notes.find({ owner: username });
  }
  return this.ready();
});
