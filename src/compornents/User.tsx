import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";

// interface loginInfo {
//   userName: string;
//   password: string;
//   confirm: string;
// }

export const Basic1 = () => {
  const [loginInfo, setWord] = useState({
    userName: "",
    password: "",
    confirm: "",
  });
  return (
    <>
      <form>
        <h1>
          <p>
            username :
            <input
              type="text"
              value={loginInfo.userName}
              onChange={(evt) =>
                setWord({ ...loginInfo, userName: evt.target.value })
              }
            />
          </p>
          <p>
            Password :
            <input
              type="text"
              value={loginInfo.password}
              onChange={(evt) =>
                setWord({ ...loginInfo, password: evt.target.value })
              }
            />
          </p>
          <p>
            Confirm :
            <input
              type="text"
              value={loginInfo.confirm}
              onChange={(evt) =>
                setWord({ ...loginInfo, confirm: evt.target.value })
              }
            />
          </p>
        </h1>
      </form>

      <h1>User name :{loginInfo.userName}</h1>
      <h1>Password : {loginInfo.password}</h1>
      <h1>Confirm : {loginInfo.confirm}</h1>
    </>
  );
};
