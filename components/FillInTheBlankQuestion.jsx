   import React, { useState } from "react";

   const FillInTheBlankQuestion = ({ question, answer }) => {
   const [userAnswer, setUserAnswer] = useState("");
   const [isCorrect, setIsCorrect] = useState(null);

   const handleInputChange = (event) => {
      setUserAnswer(event.target.value.toLowerCase());
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const userAnswers = userAnswer
         .split(",")
         .map((ans) => ans.trim().toLowerCase());

      const correctAnswers = answer
         .split("|")
         .map((ans) => ans.trim().toLowerCase());

      const isAllCorrect = userAnswers.every((ans) =>
         correctAnswers.includes(ans)
      );

      setIsCorrect(isAllCorrect);
   };

   return (
      <div>
         <p>
         {question.split("{").map((part, index) => {
            if (part.includes("}")) {
               const answerIndex = part.indexOf("}");
               const answerPlaceholder = part.slice(1, answerIndex);
               const restOfPart = part.slice(answerIndex + 1);

               return (
               <span key={index}>
                  <input
                     type="text"
                     value={userAnswer}
                     onChange={handleInputChange}
                  />
                  {restOfPart}
               </span>
               );
            } else {
               return <span key={index}>{part}</span>;
            }
         })}
         </p>
         <button onClick={handleSubmit}>Submit</button>
         {isCorrect !== null && (
         <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
         )}
         <hr />
      </div>
   );
   };

   export default FillInTheBlankQuestion;
