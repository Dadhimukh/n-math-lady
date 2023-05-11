   import React, { useState } from "react";

   const MultipleChoiceQuestion = ({ question, options, answers }) => {
   const [selectedOptions, setSelectedOptions] = useState(new Set());
   const [isCorrect, setIsCorrect] = useState(null);

   const handleSubmit = (event) => {
      event.preventDefault();

      const selectedAnswers = new Set(Array.from(selectedOptions));
      const correctAnswers = new Set(answers);

      setIsCorrect(
         selectedAnswers.size === correctAnswers.size &&
         Array.from(selectedAnswers).every((option) =>
            correctAnswers.has(option)
         )
      );
   };

   return (
      <div>
         <h3>{question}</h3>
         <form onSubmit={handleSubmit}>
         {options.map((option, index) => (
            <div key={index}>
               <label>
               <input
                  type="checkbox"
                  name="option"
                  value={option}
                  checked={selectedOptions.has(option)}
                  onChange={() => {
                     const newSelectedOptions = new Set(selectedOptions);
                     if (selectedOptions.has(option)) {
                     newSelectedOptions.delete(option);
                     } else {
                     newSelectedOptions.add(option);
                     }
                     setSelectedOptions(newSelectedOptions);
                  }}
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
         <hr />
      </div>
   );
   };

   export default MultipleChoiceQuestion;
