const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { getRandomName, users, getRandomThoughtText, getRandomReactionBody } = require('../utils/data');

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/friendsDB'; // replace with your actual connection string

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Increase timeout to 30 seconds
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Get random reaction username excluding the user who created the thought
const getRandomReactionUsername = (excludeUsername) => {
  let randomName;
  do {
    randomName = getRandomName();
  } while (randomName === excludeUsername);
  return randomName;
};

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
          username: getRandomName(), // Ensure this is valid
        })),
      }));

      // Insert thoughts into the database and update the user's thought reference
      const createdThoughts = await Thought.insertMany(thoughts);
      user.thoughts = createdThoughts.map(thought => thought._id);
      await user.save();
    }

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Error seeding the database:', err.message);
    console.error('Validation errors:', err.errors);
  } finally {
    mongoose.connection.close(); // Ensure the connection is closed after seeding
  }
};


seedDatabase();
