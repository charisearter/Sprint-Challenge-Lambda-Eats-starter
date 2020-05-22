import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import PizzaForm from "./components/PizzaForm";


const goHome = (props) => {
  return <Home />
}
const getPizza = (props) => {
  return <PizzaForm />
}




const App = () => {
  return (
    <Router>
    <div className="App">
      <div className='container'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/pizza'>Order a Pizza</Link></li>
        </ul>
      <Route exact path='/' component={Home} />
      <Route exact path='/pizza' component={PizzaForm} />

          
        </div>
      </div>
    </Router>
  );
};
export default App;
