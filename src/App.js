import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import AddFood from "./components/addfood/AddFood";
import Orders from "./components/orders/Orders";
import Restaurants from "./components/restaurants/Restaurants";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container-doj">
          <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addfood">
            <AddFood />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
