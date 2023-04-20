import React, { useState } from "react";

const SingleChoiceQuestion = ({ question, options, answer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsCorrect(selectedOption === answer);
  };

  return (
    <div>
      <h3>{question}</h3>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {isCorrect !== null && (
        <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
      )}
    </div>
  );
};

export default SingleChoiceQuestion;
