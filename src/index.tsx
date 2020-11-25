import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { TextInput } from "./compornents/TextInput";
import { SubmitButton } from "./compornents/SubmitButton";

type State = {
  taskState: string;
};

type Action = { type: "WILL" } | { type: "DOING" } | { type: "DONE" };

const initialState = {
  taskState: "WILL",
};

const taskReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "WILL":
      return {
        ...state,
        taskState: 0,
      };
    case "DOING":
      return {
        ...state,
        taskState: 1,
      };
    case "DONE":
      return {
        ...state,
        taskState: -1,
      };
    default:
      return state;
  }
};

const App = () => {
  const [taskName, setInputTask] = useState("");
  const [TaskState, setNewTask] = useState("Will");

  const handleInputValue = (value: string) => {
    setInputTask(value);
    console.log(value);
  };
  const submit = () => {
    setNewTask("Will");
  };

  return (
    <form>
      <TextInput
        title="TaskName"
        inputValue={taskName}
        onChangeValue={handleInputValue}
      />
      <SubmitButton title="Regist" onClick={submit} />
      <div>{taskName}</div>
    </form>
  );
};

export default hot(App);

ReactDOM.render(<App />, document.getElementById("app"));
