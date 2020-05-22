import React from 'react'

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
     
      <form>
        <div className='ContactInfo'>
          <input 
          type='text'
          name='fname'
          id='fnameInput'
          minLength='2'
          maxLength='10'
          placeholder='First Name' 
          />
          &nbsp;&nbsp;
          <input 
          type='text'
          name='lname'
          id='lnameInput'
          minLength='2'
          maxLength='15'
          placeholder='Last Name' 
          />
        </div>
        <div>
          <h4>Choose a size</h4>
          <h5>Required</h5>
          <div id='dropdown-form'>
          <select if='size'>
              <option value=''>Choose a Size</option>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
              <option value='XL'>Extra Large</option>
              <option value='2XL'>2x Extra Large</option>
          </select>
          </div>
        </div>
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

      <div className="instructions">
        <h4>Special Instructions</h4>
        <input 
          type='text'
          name='instructions'
          id='specialInstructions'
          maxLength='200'
          placeholder='Knock on the door, the gate code, etc...' 
          />
       
      </div>
      </form>
    </div>
  )
}

export default PizzaForm;


