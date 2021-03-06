import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Items = new Mongo.Collection('Items');

/** Define a schema to specify the structure of each document in the collection. */
const ItemsSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  itemName: String,
  price: String,
  address: String,
  image: String,
  description: String,
  category: {
    type: String,
    allowedValues: ['Transportation', 'Household Appliances', 'Technology', 'Miscellaneous'],
    defaultValue: 'Transportation',
  },
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Items.attachSchema(ItemsSchema);

/** Make the collection and schema available to other code. */
export { Items, ItemsSchema };