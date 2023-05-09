import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css"
import Sorting from "../components/sorting";

// import ParentComponent from "../components/dandD/ParentComponent";
import DragDropExample from "../components/DragAndDrop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Sorting />
    <DragDropExample />
  </>
);
