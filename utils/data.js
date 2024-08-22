const usernames = [
    "Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", 
    "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", 
    "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Smith", 
    "Jones", "Coollastname", "enter_name_here", "Ze", "Zechariah", "Zeek", "Zeeshan", "Zeid", 
    "Zein", "Zen", "Zendel", "Zenith", "Zennon", "Zeph", "Zerah", "Zhen", "Zhi", "Zhong", 
    "Zhuo", "Zi", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya", "Ziyaan", "Zohaib", 
    "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel", "Xander", "Jared", "Courtney", "Gillian", 
    "Clark", "Jared", "Grace", "Kelsey", "Tamar", "Alex", "Mark", "Tamar", "Farish", "Sarah", 
    "Nathaniel", "Parker"
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
  