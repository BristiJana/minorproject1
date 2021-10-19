import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Employee from './components/Employee';
const Home = () => {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route path="/" exact>
            <App/>
          </Route>

         <Route path="/employee" exact>
            <Employee/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
