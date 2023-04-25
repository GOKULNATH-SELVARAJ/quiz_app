import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which team won the maximum IPL titles?",
      options: [
        { id: 0, text: "Mumbai Indians", isCorrect: true },
        { id: 1, text: "Chennai Super Kings", isCorrect: false },
        { id: 2, text: "Royal Challengers Bangalore", isCorrect: false },
        { id: 3, text: "Gujarat Titans", isCorrect: false },
      ],
    },
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Chennai", isCorrect: true },
        { id: 1, text: "New Delhi", isCorrect: false },
        { id: 2, text: "Kolkata", isCorrect: false },
        { id: 3, text: "Jaipur", isCorrect: false },
      ],
    },
    {
      text: "What is part of a database that holds only one type of information?",
      options: [
        { id: 0, text: "Report", isCorrect: false },
        { id: 1, text: "Field", isCorrect: true },
        { id: 2, text: "Record", isCorrect: false },
        { id: 3, text: "File", isCorrect: false },
      ],
    },
    {
      text: "'OS' computer abbreviation usually means ?",
      options: [
        { id: 0, text: "Order of Significance", isCorrect: false },
        { id: 1, text: "Open Software", isCorrect: false },
        { id: 2, text: "Operating System", isCorrect: true },
        { id: 3, text: "Optical Sensor", isCorrect: false },
      ],
    },
    {
      text: "'.MPG' extension refers usually to what kind of file?",
      options: [
        { id: 0, text: "WordPerfect Document file", isCorrect: false },
        { id: 1, text: "MS Office document", isCorrect: true },
        { id: 2, text: "Animation/movie file", isCorrect: true },
        { id: 3, text: "Image file", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>QUIZ</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
