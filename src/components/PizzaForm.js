import React, { Fragment } from 'react'
import { Link } from  'react-router-dom'
const PizzaForm = () => {

  const sauces = ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo', 'Caribbean Jerk'];

  const listSauces = sauces.map((sauce) => 
  <div className= 'sauce-form'>
    <input type='radio' id={sauce} name= {sauce} />
    <label for={sauce}> {sauce} </label>
  </div>
  );

  const toppings = [ 'Pepperoni', 'Diced Tomatoes', 'Extra Cheese', 'Pineapple', 'Green Peppers', 'Mushrooms', 'Spinach', 'Onions', 'Three Cheese', 'Roasted Garlic', 'Plant-based Cheese', 'Grilled Chicken', 'Plant-based Chicken', 'Artichoke Hearts'];

  const listToppings = toppings.map((topping) => 
  <div className= 'toppings-form'>
    <input name = {topping} type ='checkbox' id={topping} />
    <label for={topping}> {topping} </label>
    </div>
  );

  return (
    
    <Fragment>
      <Link to='/'><button> Back to Home</button></Link>
      <form>
        <h4>Choose a Sauce</h4>
        <h5>Required</h5>
        <div className='radio-form'>
          {listSauces}
        </div>

      <div className="checkboxes">
        <h4>Add Toppings</h4>
        <h5>Choose up to 10</h5>
       {listToppings}
      </div>


      </form>
    </Fragment>
  )
}

export default PizzaForm;


