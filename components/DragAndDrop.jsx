import React, { useState } from "react";

const DragDropExample = () => {
  // state variables for the items to drag, dropped items, and correctness of the answers
  const [items, setItems] = useState([
    { id: 1, text: "Boy" },
    { id: 2, text: "Women" },
    { id: 3, text: "Man" },
    { id: 4, text: "Girl" },
  ]);

  const [droppedItems, setDroppedItems] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  // function to handle drag start on an item
  const handleDragStart = (e, id) => {
    // set the id of the dragged item in the dataTransfer object
    e.dataTransfer.setData("id", id);
  };

  // function to handle drag over on a droppable area
  const handleDragOver = (e) => {
    // prevent the default behavior of the drag over event
    e.preventDefault();
  };

  // function to handle drop of an item on a droppable area
  const handleDrop = (e) => {
    // get the id of the dropped item from the dataTransfer object
    const id = e.dataTransfer.getData("id");

    // find the item with that id from the items array
    const item = items.find((item) => item.id === parseInt(id));

    // add the dropped item to the droppedItems array
    setDroppedItems((prevState) => [...prevState, item]);

    // remove the dropped item from the items array
    setItems((prevState) =>
      prevState.filter((item) => item.id !== parseInt(id))
    );
  };

  // function to handle submission of the dropped items
  const handleSubmit = (event) => {
    event.preventDefault();

    // get the text values of the dropped items in an array
    const userAnswers = droppedItems.map((item) => {
      return item.text;
    });
    // console.log(userAnswers);

    // define the correct answers array
    const correctAnswers = ["Man", "Women", "Boy", "Girl"];

    // check if all the dropped items are in the correct order
    const isAllCorrect = userAnswers.every(
      (ans, index) => ans === correctAnswers[index]
    );

    // set the correctness state variable
    setIsCorrect(isAllCorrect);
  };

  return (
    <>
      {/* the container for the drag and drop elements */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <div>
          {/* <h2>Drag Items:</h2> */}
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              style={{
                cursor: "move",
                marginBottom: "10px",
                display: "inline-block",
                padding: "5px",
                margin: "5px",
                border: "1px solid red",
              }}
            >
              {item.text}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* the correct answer area */}
          <div style={{ padding: "10px" }}>
            <p>Man</p>
            <p>Women</p>
            <p>Boy</p>
            <p>Girl</p>
          </div>
          <div
            style={{
              width: "100px",
              border: "1px solid white",
              padding: "10px",
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {/* <h2>Dropped Items:</h2> */}
            {droppedItems.map((item) => (
              <div
                key={item.id}
                style={{ marginBottom: "0px", padding: "8px" }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {isCorrect !== null && (
        <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
      )}
      <hr />
    </>
  );
};

export default DragDropExample;
