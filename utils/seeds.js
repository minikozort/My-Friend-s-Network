const mongoose = require('mongoose');
const User = require('./models/User');
const Thought = require('./models/Thought');
const { getRandomName, users, getRandomThoughtText, getRandomReactionBody } = require('./utils/data');

// Your seeding function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert users into the database
    const createdUsers = await User.insertMany(users);

    // Create thoughts for each user
    for (const user of createdUsers) {
      const thoughts = [...Array(3)].map(() => ({
        thoughtText: getRandomThoughtText(),
        username: user.username,
        reactions: [...Array(2)].map(() => ({
          reactionBody: getRandomReactionBody(),
          username: getRandomName(), // You can ensure this is consistent by using user.username
        })),
      }));

      // Insert thoughts into the database and update the user's thought reference
      const createdThoughts = await Thought.insertMany(thoughts);
      user.thoughts = createdThoughts.map(thought => thought._id);
      await user.save();
    }

    console.log('Database seeded successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
};

seedDatabase();
