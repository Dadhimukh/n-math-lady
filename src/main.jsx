import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";

import FreeChoiceQuestion from "../components/FreeChoiceQuestion";
import FillInTheBlankQuestion from "../components/FillInTheBlankQuestion";
import SingleChoiceQuestion from "../components/SingleChoiceQuestion";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";
import Sorting from "../components/sorting";
import DragDropExample from "../components/DragAndDrop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <p>
      <Sorting />
    </p>
    <p>
      <DragDropExample />
    </p>

    <p>
      <SingleChoiceQuestion
        question={"Capital of India"}
        options={["Goa", "Delhi", "Mumbai", "Indor"]}
        answer={"Delhi"}
      />
    </p>
    <p>
      <MultipleChoiceQuestion
        question={"Even Numbers are"}
        options={["2", "3", "4", "6", "7"]}
        answers={["2", "4", "6"]}
      />
    </p>
    <FillInTheBlankQuestion question={"My name is {} Yadav"} answer={"dadhi"} />

    <FreeChoiceQuestion />
  </>
);
