import React, { useState } from "react";
import MathJax from "react-mathjax";

const FreeChoiceQuestion = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <label htmlFor="answer">Enter your answer:</label>
      <input
        type="text"
        id="answer"
        value={answer}
        onChange={handleAnswerChange}
      />

      <MathJax.Provider>
        <MathJax.Node formula={answer} />
      </MathJax.Provider>

      <div>
        <button onClick={() => setAnswer(answer + "\\frac{}{}")}>
          Fraction
        </button>
        <button onClick={() => setAnswer(answer + "\\sqrt{}")}>
          Square root
        </button>
        <button onClick={() => setAnswer(answer + "\\sqrt[3]{}")}>
          Cube root
        </button>
        <button onClick={() => setAnswer(answer + "\\Delta=\\sqrt{b^2-4ac}")}>
          Quadratic equation
        </button>
        <hr />
      </div>
    </div>
  );
};

export default FreeChoiceQuestion;
