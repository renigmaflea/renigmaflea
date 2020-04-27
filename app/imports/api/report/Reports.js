import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Reports = new Mongo.Collection('Reports');

/** Define a schema to specify the structure of each document in the collection. */
const ReportsSchema = new SimpleSchema({
  reason: String,
  comment: String,
  itemID: String,
  open: Boolean, // open = true, close = false
  reporter: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Reports.attachSchema(ReportsSchema);

/** Make the collection and schema available to other code. */
export { Reports, ReportsSchema };
