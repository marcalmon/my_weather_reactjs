import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from '../App';
import Current from '../views/Current';
import Forecast from '../views/Forecast';


function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/v1" component={App} />
        <Route path="/v1/current" exact component={Current} />
        <Route path="/v1/forecast" exact component={Forecast} />
      </div>
    </Router>
  );
}

export default AppRouter;