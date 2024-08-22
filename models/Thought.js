const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280, // Ensures the text is between 1 and 280 characters
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
  
  // Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
  thoughtSchema
    .virtual('reactionCount')
    .get(function () {
      return this.reactions.length;
    });
  
  // Create the Thought model using the thoughtSchema
  const Thought = model('Thought', thoughtSchema);
  
  module.exports = Thought;
  