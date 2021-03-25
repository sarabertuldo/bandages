import "./App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import GearList from "./components/Gear/GearList";
import Home from "./components/Home/Home";
import OnTour from "./components/OnTour/OnTour";

function App() {
  return (
    <div>
      <header className="top">Bandages</header>
      <Home />
      <CreateAccount />
      <GearList />
      <OnTour />
      <footer className="bottom">Made 2021</footer>
    </div>
  );
}

export default App;
