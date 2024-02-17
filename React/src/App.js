import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Admin";


function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            {/* Other routes */}
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
