import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Categories = new Mongo.Collection('Categories');

/** Define a schema to specify the structure of each document in the collection. */
const CategoriesSchema = new SimpleSchema({
  name: String,
  url: String,
  image: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Categories.attachSchema(CategoriesSchema);

/** Make the collection and schema available to other code. */
export { Categories, CategoriesSchema };
