import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/Items.js';
import { Reports } from '../../api/report/Report';

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

/** Initialize the database with a default item reports. */
function addReports(data) {
  console.log(`  Adding: ${data.itemID} (${data.reporter})`);
  Reports.insert(data);
}

/** Initialize the reports collection if empty. */
if (Reports.find().count() === 0) {
  if (Meteor.settings.defaultReports) {
    console.log('Creating default reports.');
    Meteor.settings.defaultReports.map(data => addReports(data));
  }
}
