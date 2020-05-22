import React from 'react'
import { Link } from  'react-router-dom'
const PizzaForm = () => {
//Sauce choices
  const sauces = ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo', 'Caribbean Jerk'];
//List sauce choices in  designated area
  const listSauces = sauces.map((sauce) => 
  <div className= 'sauce-form'>
    <input type='radio' id={sauce} name= {sauce} />
    <label for={sauce}> {sauce} </label>
  </div>
  );
//Topping Choices
  const toppings = [ 'Pepperoni', 'Diced Tomatoes', 'Extra Cheese', 'Pineapple', 'Green Peppers', 'Mushrooms', 'Spinach', 'Onions', 'Three Cheese', 'Roasted Garlic', 'Plant-based Cheese', 'Grilled Chicken', 'Plant-based Chicken', 'Artichoke Hearts'];
//List topping choices in designated area
  const listToppings = toppings.map((topping) => 
  <div className= 'toppings-form'>
    <input name = {topping} type ='checkbox' id={topping} />
    <label for={topping}> {topping} </label>
    </div>
  );

  return (
    
    <div>
      <h3>This is the Pizza Form</h3>
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
    </div>
  )
}

export default PizzaForm;


