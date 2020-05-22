import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import Form from './components/Form';



const App = () => {
  return (
    <Router>
    <div className="App">
      <div className='container'>
            <Home />
            <Form />
        </div>
      </div>
    </Router>
  );
};
export default App;
