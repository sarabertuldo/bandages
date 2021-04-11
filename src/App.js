import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import GearList from "./components/Gear/GearList";
import Home from "./components/Home/Home";
import OnTour from "./components/OnTour/OnTour";
import GearProvider from "./shared/GearContext";
import {
  BrowserRouter as Router,
  Redirect,
  NavLink,
  Route,
  Switch,
  Link,
} from "react-router-dom";

function App() {
  return (
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
              <Route path="/home" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/gearlist" component={GearList} />
              <Route path="/ontour" component={OnTour} />
              <Route path="*">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </main>
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
  );
}

export default App;
