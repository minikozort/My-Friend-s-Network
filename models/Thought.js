const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); // Make sure the path is correct

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(), // Format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], // Array of nested reactionSchema documents
  },
  {
    toJSON: {
      virtuals: true,
      getters: true, // Enable getters for formatting
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
