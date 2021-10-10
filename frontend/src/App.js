import React from 'react'
import Map from './Map/Map'
import Map2 from './Map/Map2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path='/add-journey'><Map2/></Route>
            <Route exact path="/watch-journey"><Map/></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
