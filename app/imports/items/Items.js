import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Items = new Mongo.Collection('Items');

/** Define a schema to specify the structure of each document in the collection. */
const ItemSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  address: String,
  image: String,
  description: String,
  owner: String

}, { tracker: Tracker });

/** Attach this schema to the collection. */
Items.attachSchema(ItemSchema);


/** Make the collection and schema available to other code. */
export { Items, ItemSchema };