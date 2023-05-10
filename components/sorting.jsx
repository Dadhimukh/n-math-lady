   import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
   import { useState } from "react";

   const userData = ["Red", "Yellow", "Blue", "Green", "Black"];

   const answer = ["Red", "Green", "Blue", "Black", "Yellow"];

   export default function Sorting() {
   const [users, setUsers] = useState(userData);
   const [isCorrect, setIsCorrect] = useState(null);

   const handleDragEnd = (e) => {
      if (!e.destination) return;
      let tempData = Array.from(users);
      let [source_data] = tempData.splice(e.source.index, 1);
      tempData.splice(e.destination.index, 0, source_data);
      setUsers(tempData);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      const isAllCorrect = users.every((ans, index) => ans === answer[index]);

      setIsCorrect(isAllCorrect);
   };

   return (
      <div>
         <span>Red -- </span>
         <span>Green -- </span>
         <span>Blue -- </span>
         <span>Black -- </span>
         <span>Yellow </span>

         <DragDropContext onDragEnd={handleDragEnd}>
         <table>
            <thead>
               <tr>
               <th />
               <th>Arrange The Color</th>
               </tr>
            </thead>
            <Droppable droppableId="droppable-1">
               {(provider) => (
               <tbody
                  ref={provider.innerRef}
                  {...provider.droppableProps}
               >
                  {users?.map((user, index) => (
                     <Draggable key={user} draggableId={user} index={index}>
                     {(provider) => (
                        <tr
                           {...provider.draggableProps}
                           ref={provider.innerRef}
                           {...provider.dragHandleProps}
                        >
                           <td>{user}</td>
                        </tr>
                     )}
                     </Draggable>
                  ))}
                  {provider.placeholder}
               </tbody>
               )}
            </Droppable>
         </table>
         </DragDropContext>
         <button onClick={handleSubmit}>Submit</button>
         {isCorrect !== null && (
         <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
         )}
      </div>
   );
   }
