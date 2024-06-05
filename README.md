# MCQ Test Application

This is a Multiple Choice Question (MCQ) test application built with React and Chakra UI. The application allows users to answer a series of questions within a specified time limit. If the time expires, the final score page is displayed, and unanswered questions do not count towards the score. The application's state, including the current question and timer, is persisted across page refreshes.

## Features

- Dynamic questions fetched from a JSON file.
- Multiple-choice options for each question.
- Timer functionality with a 10-minute limit.
- State persistence across page refreshes.
- Final score page with a detailed breakdown of correct and incorrect answers.
- Responsive design using Chakra UI.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mcq-test-app.git
    cd mcq-test-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/App.js`: Main component managing the state and logic of the application.
- `src/components/Question.js`: Component to display each question.
- `src/components/Options.js`: Component to display options for each question.
- `src/components/FinalScore.js`: Component to display the final score and detailed results.

## Code Highlights

### Timer and State Persistence

The application uses `localStorage` to persist the state across page refreshes. The timer is adjusted based on the time elapsed since the last save.
