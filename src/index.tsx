import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
// import { InputForm } from "./compornents/InputForm";

interface DisplayRegisteredTaskFunc {
  (taskList: Array<string>): Array<string>;
}

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [taskState, setTaskState] = useState("will");
  return (
    <form>
      <input
        type="text"
        value={taskName}
        onChange={(evt) => setTaskName(evt.target.value)}
      />
      <button onClick={() => setTaskName((taskName) => (taskName = taskName))}>
        Regist{taskName}
      </button>
      <br />
      <div>
        <button
          onClick={() => setTaskState((prevState) => (prevState = "finish"))}
        >
          State( {taskState} )
        </button>
        {/* <InputForm /> */}
        {/* <registTask /> */}
      </div>
    </form>
  );
};

export default hot(App);

ReactDOM.render(<App />, document.getElementById("app"));
