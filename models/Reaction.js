const { Schema, model } = require('mongoose');

// Define reactionSchema for reactions (nested documents)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Schema.Types.ObjectId(), // Default value is a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280, // 280 character maximum
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(), // Format the timestamp on query
    },
  },
  {
    toJSON: {
      getters: true, // Enable getters for formatting
    },
    id: false,
  }
);

module.exports = reactionSchema;