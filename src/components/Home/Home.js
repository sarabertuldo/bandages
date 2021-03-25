import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Home Page works</h1>
      <div className="login-area">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>

        <h4>
          Don't have an account? Sign up <u>here</u>!
        </h4>
      </div>
    </>
  );
};

export default Home;
