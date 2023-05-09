import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Boy" },
    { id: 2, text: "Women" },
    { id: 3, text: "Man" },
    { id: 4, text: "Girl" },
  ]);

  // const [isCorrect, setIsCorrect] = useState(null);

  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("id");
    const item = items.find((item) => item.id === parseInt(id));
    setDroppedItems((prevState) => [...prevState, item]);
    setItems((prevState) =>
      prevState.filter((item) => item.id !== parseInt(id))
    );
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const isAllCorrect = items.every(
  //     (ans, index) => ans === droppedItems[index]
  //   );
  //   // console.log(answer);

  //   setIsCorrect(isAllCorrect);
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <div onDrop={handleDrop} onDragOver={handleDragOver}>
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
                border:"1px solid red"
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
          <div style={{ padding: "10px" }}>
            <p>Man</p>
            <p>Women</p>
            <p>Boy</p>
            <p>Girl</p>
          </div>
          <div
            style={{
              width: "200px",
              border: "1px solid red",
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
      {/* <button onClick={handleSubmit}>Submit</button>
      {isCorrect !== null && (
        <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
      )} */}
    </>
  );
};

export default App;
