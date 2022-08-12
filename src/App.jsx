import React from "react";
import "./App.css";
import Discover from "./components/discover/discover.jsx";
import { Switch, Route } from "react-router-dom";


const App = ({users, cards}) => {
  return (
    <div>
      <Switch>
        <Route exact path="/discover">
          <Discover users={users} cards={cards}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
