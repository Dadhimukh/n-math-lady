   import React, { useState } from "react";

   const SortingChoiceQuestion = ({ choices, answer }) => {
   const [userAnswers, setUserAnswers] = useState(
      Array(choices.length).fill(null)
   );
   const [isCorrect, setIsCorrect] = useState(null);

   const handleInputChange = (event, index) => {
      const newAnswers = Array.from(userAnswers);
      newAnswers[index] = event.target.value;
      setUserAnswers(newAnswers);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      const isAllCorrect = userAnswers.every(
         (ans, index) => ans === answer[index]
      );

      setIsCorrect(isAllCorrect);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
         {choices.map((choice, index) => (
            <div key={index}>
               <label>{choice}</label>
               <input
               type="text"
               value={userAnswers[index]}
               onChange={(event) => handleInputChange(event, index)}
               />
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

   export default SortingChoiceQuestion;
