import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/Items.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addContact(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Items.insert(data);
}

/** Initialize the collection if empty. */
if (Items.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating Contact data.');
    Meteor.settings.defaultContacts.map(data => addContact(data));
  }
}
