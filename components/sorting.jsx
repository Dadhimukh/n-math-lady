import { useState } from "react";
// Importing required components from the react-beautiful-dnd and react packages
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// Creating an array of colors to be sorted
const userData = ["Red", "Yellow", "Blue", "Green", "Black"];

// Creating an array of correct color order
const answer = ["Red", "Green", "Blue", "Black", "Yellow"];

export default function Sorting() {
  // Initializing state for users array and whether the sorting is correct or not
  const [users, setUsers] = useState(userData);
  const [isCorrect, setIsCorrect] = useState(null);

  // Function to handle the drag and drop of the colors
  const handleDragEnd = (e) => {
    // If the destination is empty, return
    if (!e.destination) return;
    // Create a copy of the users array
    let tempData = Array.from(users);
    // Remove the dragged element from the source index
    let [source_data] = tempData.splice(e.source.index, 1);
    // Insert the dragged element at the destination index
    tempData.splice(e.destination.index, 0, source_data);
    // Update the users state with the new order
    setUsers(tempData);
  };

  // Function to handle the form submission and check if the order is correct
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all the colors are in the correct order
    const isAllCorrect = users.every((ans, index) => ans === answer[index]);

    // Set the isCorrect state with the result
    setIsCorrect(isAllCorrect);
  };

  return (
    <div>
      <span>Red -- </span>
      <span>Green -- </span>
      <span>Blue -- </span>
      <span>Black -- </span>
      <span>Yellow </span>

      {/* Wrap the sortable table in a DragDropContext component with handleDragEnd function as a prop */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <table>
          <thead>
            <tr>
              <th>Arrange The Color</th>
            </tr>
          </thead>

          {/* Wrap the table body in a Droppable component with droppableId prop set to "droppable-1" */}
          <Droppable droppableId="droppable-1">
            {/* Render the table body as a function that takes a 'provider' argument */}
            {(provider) => (
              <tbody
                // Use the innerRef prop provided by Droppable for the table body reference
                ref={provider.innerRef}
                // Spread the droppableProps provided by Droppable onto the table body
                {...provider.droppableProps}
              >
                {/* Map over the current order of colors and render each one as a draggable row */}
                {users?.map((user, index) => (
                  <Draggable key={user} draggableId={user} index={index}>
                    {/* Render each draggable row as a function that takes a 'provider' argument */}
                    {(provider) => (
                      <tr
                        {...provider.draggableProps}
                        ref={provider.innerRef}
                        {...provider.dragHandleProps}
                      >
                        <td
                          style={{
                            color: "red",
                            textAlign: "center",
                            width: 500,
                            border: "1px dotted white",
                          }}
                        >
                          {user}
                        </td>
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
      <hr />
    </div>
  );
}
