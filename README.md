# My-Friend's-Network

## Description

**My-Friend's-Network** is a back-end application built to manage users, their social interactions, thoughts, and reactions within a network. This application leverages MongoDB as the database and Express.js as the server framework, providing a RESTful API that can serve as the foundation for a social networking platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints for Insomnia Testing](#api-endpoints)
  - [Users](#users)
  - [Friends](#friends)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [Testing with Insomnia](#testing-with-insomnia)
- [Example Workflow](#example-workflow)
- [Screenshots](#screenshots)
- [Repository Link](#repository-link)
- [Mock-up Video](#mock-up-video)


## Installation

To set up and run the application locally, follow these steps:

1. **Open your code editor**
    * VS Code (Visual Studio Code)
2. **Clone the Repository**
    * Copy the repository link and clone it to your local machine by running `git clone https://github.com/minikozort/My-Friend-s-Network.git`
3. **Navigate to the Project Directory**
    * Change to the directory where the project was cloned by running `cd My-Friend-s-Network`
4. **Open an integrated terminal**
    * Right click on index.js and select open and integrated terminal
5. **Install Dependencies**
    * Run `npm install` in your terminal to install the necessary packages
6. **Seed the Database**
    * Run `npm run seed` to populate the database with seed data.
7. **Start the Server**
    * Run `npm start` or `node server.js` to start the server. 
8. **Test the endpoints**
    * Use tools like Insomnia or Postman to test the API endpoints.


## Usage

Once the server is running, you can interact with the API:


## Testing with Insomnia

To test the API endpoints:

- Select the appropriate HTTP method (GET, POST, PUT, DELETE).
- Set the URL to match the desired endpoint.
- Provide any required parameters in the URL.
- For POST and PUT requests, include the request body in JSON format.


## API Endpoints

### Users

- `GET /api/users` - Retrieve all users.
- `GET /api/users/:userId` - Retrieve a single user by ID.
- `POST /api/users` - Create a new user.
- `PUT /api/users/:userId` - Update a user by ID.
- `DELETE /api/users/:userId` - Delete a user by ID.

### Friends

- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list.

### Thoughts

- `GET /api/thoughts` - Retrieve all thoughts.
- `GET /api/thoughts/:thoughtId` - Retrieve a single thought by ID.
- `POST /api/thoughts` - Create a new thought.
- `PUT /api/thoughts/:thoughtId` - Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID.

### Reactions

- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought.


## Example Workflow

Here’s a typical workflow using the API:

1. **Create a User**
   POST /api/users
   {
   "username": "Skywalker",
   "email": "skywalker@example.com"
   }
2. **Create a Thought**
   POST /api/thoughts
   {
   "thoughtText": "This is my first thought!",
   "username": "Skywalker"
   }
3. **Add a Reaction**
   POST /api/thoughts/:thoughtId/reactions
   {
   "reactionBody": "Great thought!",
   "username": "LunarEcho"
   }
4. **Add a Friend**
   POST /api/users/:userId/friends/:friendId


## Repository Link

[My-Friend's-Network GitHub Repository](https://github.com/minikozort/My-Friend-s-Network.git)


## Mock-up Video
[Mock-up Video](https://www.loom.com/share/60e91980c947490e8d766780f90e8bf3?sid=56d4a4ce-342f-4825-817f-52c7e12bd3cc)


## Screenshots

Below are some screenshots demonstrating the API endpoints:

![alt text](./Pics/My%20Friends%20Network%20Get%20All%20Users.PNG)
![alt text](./Pics/My%20Friends%20Network%20Get%20A%20Single%20User.PNG)
![alt text](./Pics/My%20Friends%20Network%20Create%20User.PNG)
![alt text](./Pics/My%20Friends%20Network%20Update%20User.PNG)
![alt text](./Pics/My%20Friends%20Network%20Delete%20User.PNG)
![alt text](./Pics/My%20Friends%20Network%20Add%20A%20Friend.PNG)
![alt text](./Pics/My%20Friends%20Network%20Delete%20A%20Friend.PNG)
![alt text](./Pics/My%20Friends%20Network%20Get%20All%20Thoughts.PNG)
![alt text](./Pics/My%20Friends%20Network%20Get%20A%20Single%20Thought.PNG)
![alt text](./Pics/My%20Friends%20Network%20Create%20A%20Thought.PNG)
![alt text](./Pics/My%20Friends%20Network%20Update%20A%20Thought.PNG)
![alt text](./Pics/My%20Friends%20Network%20Delete%20A%20Thought.PNG)
![alt text](./Pics/My%20Friends%20Network%20Create%20A%20Reaction.PNG)
![alt text](./Pics/My%20Friends%20Network%20Delete%20A%20Reaction.PNG)
