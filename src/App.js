import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import GearList from "./components/Gear/GearList";
import Home from "./components/Home/Home";
import OnTour from "./components/OnTour/OnTour";
import { GearContext } from "./shared/GearContext";
import {
  BrowserRouter as Router,
  Redirect,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import store from "./redux/Store";

function App() {
  return (
    <GearContext.Provider store={store}>
      <Router>
        <div>
          <header className="top">Bandages</header>
          <nav>
            <NavLink className="link" to="/Home">
              Home
            </NavLink>
            <NavLink className="link" to="/CreateAccount">
              Create Account
            </NavLink>
            <NavLink className="link" to="/GearList">
              GearList
            </NavLink>
            <NavLink className="link" to="/OnTour">
              On Tour
            </NavLink>
          </nav>
          <main>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/createaccount" component={CreateAccount} />
              <Route path="/gearlist" component={GearList} />
              <Route path="/ontour" component={OnTour} />
              <Route path="*">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </main>
          <footer className="bottom">Made in 2021</footer>
        </div>
      </Router>
    </GearContext.Provider>
  );
}

export default App;
