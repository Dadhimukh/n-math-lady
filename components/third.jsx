   import React, { useState } from "react";
   import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

   const MatrixSortingChoiceQuestion = ({ criterion, sortElements, answer }) => {
   const [userAnswers, setUserAnswers] = useState(
      Array(sortElements.length).fill(null)
   );
   const [isCorrect, setIsCorrect] = useState(null);

   const handleDragEnd = (result) => {
      console.log(result);
      console.log(result.destination);
      if (!result.destination) {
         return;
      }

      const newAnswers = Array.from(userAnswers);
      // console.log(newAnswers);
      const movedAnswer = newAnswers.splice(result.source.index, 1)[0];
      // console.log(movedAnswer);
      newAnswers.splice(result.destination.index, 0, movedAnswer);

      // arr = ["a", "b", "c", "d"];
      // console.log(arr + " arr");
      // newArray = Array.from(arr);
      // console.log(newArray + " newArray");
      // movedArray = newArray.splice(2, 1)[0];
      // console.log(movedArray + " movedArray");
      // newArray.splice(0, 0, movedArray);
      // console.log(newArray + " newArray");

      setUserAnswers(newAnswers);
      // console.log(newAnswers);
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
         <DragDropContext onDragEnd={handleDragEnd}>
         <table>
            <thead>
               <tr>
               <th>{criterion}</th>
               <th>Match</th>
               </tr>
            </thead>
            <tbody>
               <Droppable droppableId="sortElements">
               {(provided) => (
                  <tr {...provided.droppableProps} ref={provided.innerRef}>
                     {/* {console.log(provided)} */}
                     <td></td>
                     <td>
                     {/* {console.log(sortElements)} */}
                     {sortElements.map((element, index) => (
                        <Draggable
                           key={index}
                           draggableId={element} 
                           index={index}
                        >
                           {/* {console.log(element)} */}
                           {(provided) => (
                           <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                           >
                              {element}
                           </div>
                           )}
                        </Draggable>
                     ))}
                     {provided.placeholder}
                     </td>
                  </tr>
               )}
               </Droppable>
               {userAnswers.map((ans, index) => (
               <tr key={index}>
                  {/* {console.log(ans)} */}
                  <td>{answer[index]}</td>
                  <td>{ans}</td>
               </tr>
               ))}
            </tbody>
         </table>
         </DragDropContext>
         <button onClick={handleSubmit}>Submit</button>
         {isCorrect !== null && (
         <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
         )}
      </div>
   );
   };

   export default MatrixSortingChoiceQuestion;
