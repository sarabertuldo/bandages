import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateAccount.css";

const CreateAccount = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  function signup() {
    console.log(username, password);
    if (username.length > 3 && password.length > 3) {
      history.push("/search");
    }
  }
  return (
    <>
      <h1>Sign Up</h1>
      <div className="form-container">
        <div class="input-area">
          <input
            type="text"
            placeholder="Artist Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          ></input>
        </div>
        <div class="input-area">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          ></input>
        </div>
        <div class="input-area">
          <input
            type="email"
            placeholder="E-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          ></input>
        </div>
        <div class="input-area">
          <input
            type="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="email"
          ></input>
        </div>
        <button className="submit" onClick={() => signup()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateAccount;
