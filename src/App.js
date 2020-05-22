import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';

const App = () => {
  return (
    <Router>
    <div className="App">
      <div className='container'>
            <Route 
            exact path='/' 
            render ={ props => ( 
            <Fragment>
              <Home />
              </Fragment> )} 
            />
        </div>
      </div>
    </Router>
  );
};
export default App;
