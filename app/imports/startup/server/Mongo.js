import { Meteor } from 'meteor/meteor';
import { Items } from '../../api/item/Items.js';
import { Reports } from '../../api/report/Reports';
import { Categories } from '../../api/categories/Categories';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addItem(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Items.insert(data);
}

/** Initialize the collection if empty. */
if (Items.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating Item data.');
    Meteor.settings.defaultItems.map(data => addItem(data));
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
function addItem(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Items.insert(data);
}


/** Initialize the collection if empty. */
if (Items.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating item data.');
    Meteor.settings.defaultItems.map(data => addItem(data));
  }
}

/** Initialize the database with a default categories. */
function addCategory(data) {
  console.log(`  Adding category: ${data.name}`);
  Categories.insert(data);
}

/** Initialize the reports collection if empty. */
if (Categories.find().count() === 0) {
  if (Meteor.settings.defaultCategories) {
    console.log('Creating default categories.');
    Meteor.settings.defaultCategories.map(data => addCategory(data));
  }
}
