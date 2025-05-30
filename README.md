React Quiz App

This is a simple Quiz Application built with React. It uses a fake API server to fetch the quiz questions and allows the user to play, track points, and manage a high score.

Features
Fetches quiz questions from a local API server

Countdown timer for each question

Keeps track of user score and high score

Different screens for start, active quiz, loading, error, and finish

Getting Started
1.Install Dependencies

First, install the project dependencies:
npm install

2. Run the Fake API Server
This project uses json-server to serve the questions data locally.
Make sure you have json-server installed globally (or install it if needed):
Run the server with:
json-server --watch data/questions.json --port 8000

3. Start the React App
Run the development server:
npm start
The app will open at http://localhost:3000.
