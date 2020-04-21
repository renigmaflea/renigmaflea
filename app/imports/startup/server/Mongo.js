import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/Items';
import { Stuffs } from '../../api/stuff/Stuff';
import { Reports } from '../../api/report/Reports';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
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

/** Initialize the database with a default items. */
function addItems(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Items.insert(data);
}

/** Initialize the itemss collection if empty. */
if (Items.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating default items.');
    Meteor.settings.defaultItems.map(data => addItems(data));
  }
}
