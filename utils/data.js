const usernames = [
  "Skywalker",
  "PixelWizard",
  "CyberNinja",
  "LunarEcho",
  "QuantumQuasar",
  "NebulaVoyager",
  "EchoByte",
  "StellarScribe",
  "InfinityLoop",
  "DigitalNomad"
];

  // Utility function to get a random item from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Generate random users with unique usernames and emails
  const users = usernames.map((name) => ({
    username: name,
    email: `${name.replace(/[^a-zA-Z0-9]/g, "")}${Math.floor(Math.random() * 10000)}@example.com`,
  }));
  
  // Get a random username from the list
  const getRandomName = () => getRandomArrItem(usernames);
  
  // Generate random thought text
  const getRandomThoughtText = () => {
    const thoughts = [
      "Here's a cool thought...", "This is a random thought!", "What if we could fly?", 
      "Imagine a world without borders.", "Life is a journey, not a destination.", 
      "Coding is like magic, but real.", "Every day is a new opportunity.", 
      "What would you do if you weren't afraid?", "Why do we dream?", 
      "The universe is vast and mysterious."
    ];
  
    return getRandomArrItem(thoughts);
  };
  
  // Generate random reaction body text
  const getRandomReactionBody = () => {
    const reactions = [
      "I totally agree!", "Wow, that's interesting!", "I never thought about it that way.", 
      "That's a great point!", "Mind-blowing!", "This made my day!", 
      "Couldn't have said it better.", "I'm not so sure about that.", 
      "That's an interesting perspective.", "I love this!"
    ];
  
    return getRandomArrItem(reactions);
  };
  
  module.exports = { getRandomName, users, getRandomThoughtText, getRandomReactionBody };
  