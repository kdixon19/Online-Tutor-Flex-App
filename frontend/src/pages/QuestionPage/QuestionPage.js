import React, { useState } from "react";

const QuestionPage = ({ incrementCounter }) => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the answer is correct
    const correctAnswer = "7"; // Expected correct answer
    const isAnswerCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();

    // Set the correctness state
    setIsCorrect(isAnswerCorrect);

    // Reset the input field
    setAnswer("");

    // Increment the Correct Counter
    if (isAnswerCorrect) {
      incrementCounter();
    }
  };

  const question = "What is 5 + 2?";

  return (
    <div>
      <h3>Question: {question}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isCorrect && <p>Correct answer!</p>}
      {!isCorrect && isCorrect !== null && <p>Incorrect answer!</p>}
    </div>
  );
};

export default QuestionPage;
