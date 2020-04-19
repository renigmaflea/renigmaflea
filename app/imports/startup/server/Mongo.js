import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Reports } from '../../api/report/Report';

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
