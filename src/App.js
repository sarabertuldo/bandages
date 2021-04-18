import "./App.css";
import React, { useEffect, useMemo, useState } from "react";
import SignUp from "./components/SignUp/SignUp";
import GearList from "./components/Gear/GearList";
import Home from "./components/Home/Home";
import OnTour from "./components/OnTour/OnTour";
import GearProvider from "./shared/GearContext";
import { UserContext, initialState } from "./shared/UserContext";
import {
  BrowserRouter as Router,
  Redirect,
  NavLink,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { useSelectors, useActionCreators } from "use-redux";
import { usernameSelector, userSelector } from "./redux/selectors";
import { clearUser, setUser } from "./redux/actions";
import axios from "axios";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  const [globalState, setGlobalState] = useState(initialState);
  const [username, user] = useSelectors(usernameSelector, userSelector);
  const [clearUserFromState, setUserInState] = useActionCreators(
    clearUser,
    setUser
  );
  const isAuth = useMemo(() => {
    return username.length > 0;
  }, [user]);
  useEffect(async () => {
    try {
      const json = await axios.get("/users/authenticate");
      if (json.data.success) {
        setUserInState(json.data.data.username);
      }
    } catch (err) {}
  }, []);
  async function logout() {
    try {
      const { data } = await axios("/users/logout");
      clearUserFromState();
    } catch (err) {
      console.log("Logout");
    }
  }
  return (
    <UserContext.Provider value={[globalState, setGlobalState]}>
      <GearProvider>
        <Router>
          <div>
            <header className="top">
              <Link to="/Home">
                <img
                  src="https://i.ibb.co/g4JHVcW/bandages-logo3.jpg"
                  alt="Bandages logo"
                  height="75"
                  width="350"
                />
              </Link>
            </header>
            <nav className="navbar">
              <NavLink className="link" to="/Home">
                Home
              </NavLink>
              <NavLink className="link" to="/SignUp">
                Sign Up
              </NavLink>
              <NavLink className="link" to="/GearList">
                Gear List
              </NavLink>
              <NavLink className="link" to="/OnTour">
                On Tour
              </NavLink>
            </nav>
            <main>
              <Switch>
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/home"
                  component={Home}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={false}
                  path="/signup"
                  component={SignUp}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={true}
                  path="/gearlist"
                  component={GearList}
                />
                <ProtectedRoute
                  isAuth={isAuth}
                  authRequired={true}
                  path="/ontour"
                  component={OnTour}
                />
                <Route path="*">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </main>
            <div className="logout">
              <button onClick={() => logout()}>Logout</button>
            </div>
            <footer className="bottom">
              <a href="https://github.com/sarabertuldo">
                <div className="logo">
                  <img
                    src="https://i.ibb.co/P6ZGx4N/madeby.png"
                    alt="made by sara bertuldo"
                    height="50"
                    width="250"
                  />
                </div>
              </a>
            </footer>
          </div>
        </Router>
      </GearProvider>
    </UserContext.Provider>
  );
}

export default App;
