import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NotMatch from "./components/NotMatch/NotMatch";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/countries">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
