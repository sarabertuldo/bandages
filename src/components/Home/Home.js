import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { setUser } from "../../redux/actions";
import "./Home.css";

const Home = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login() {
    setError("");
    console.log(username, password);
    if (
      username.length < 8 ||
      username.length > 16 ||
      password.length > 20 ||
      password.length < 8
    ) {
      setError(
        "Username must be between 8 and 16 characters. Password must be between 8 and 20 characters."
      );
      return;
    }
    try {
      const response = await fetch("/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const json = await response.json();
      if (json.data.error) {
        setError(json.data.error);
      } else {
        props.setUser(json.data.data.username);
        history.push("/search");
      }
    } catch (error) {
      setError("Something went wrong, please try again later.");
    }
  }
  return (
    <>
      <h1>Hello!</h1>
      <p>
        Bandages is here to help you manage your band's gear. Keep track of your
        inventory through our website and mark items that you take on tour with
        you! Did you know bands traveling between borders need to have a
        detailed documentation of instruments? They also ask you how much is in
        your bank account, it's a little weird. It's just kind of nice to have a
        list of what you have anyway. If your mom was in the band with you, she
        would tell you do this! Listen to her and don't forget to call her once
        in a while. Remember, she used to cook food for you.
      </p>
      <h3>Login</h3>
      <main>
        <div>
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          ></input>
        </div>
        <div>
          <input
            id="password"
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          ></input>
        </div>
        <button onClick={() => login()}>Submit</button>
        {error.length > 0 && (
          <h3 style={{ color: "red" }} className="text-center">
            {error}
          </h3>
        )}
        <p>
          Create an account <Link to="/createaccount">here</Link>.
        </p>
      </main>
    </>
  );
};

const mapDispatchToProps = {
  setUser,
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// props.setUser(username);
// let user = { username: username, password: password}
//  fetch("/users/signup")
//    method: "POST"",
// headers: { "Content-Type": "application/json" },
// body: JSON.stringify(user),
// })
// .then((res) => res.json())
//.then((json) => console.log(json))
// history.push("/search";)
