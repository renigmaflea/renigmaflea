import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** For some reason Meteor can't subscribe to two different pubs of the same collection
 * this collection is for the chat component used in the NavBar.
 * "this is dumb" -tf2 code leak's comment  */
const ChatNavBar = new Mongo.Collection('ChatNavBar');

/** Define a schema to specify the structure of each document in the collection. */
const ChatNavBarSchema = new SimpleSchema({
  users: {
    type: Array,
  },
  'users.$': {
    type: String,
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
ChatNavBar.attachSchema(ChatNavBarSchema);

/** Make the collection and schema available to other code. */
export { ChatNavBar, ChatNavBarSchema };
