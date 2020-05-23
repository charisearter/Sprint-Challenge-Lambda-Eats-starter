import React, { useState } from 'react'


const PizzaForm = () => {



  const [formData, setFormData ]= useState ({
    fname: '',
    lname: '',
    size: '',
    sauce: '',
    instructions: '',
    addTopping: '',
  })

// const [ isChecked, setIsChecked ] = useState({
//   addTopping: false
// });


const onChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    
  })

}


//Sauce choices
  const sauces = ['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo', 'Caribbean Jerk'];
//List sauce choices in  designated area
  const listSauces = sauces.map((sauce) => 
  <div className= 'sauce-form'>
    <input type='checkbox' id={sauce} name= 'sauce' onChange={onChange}/>
    <label for={sauce}> {sauce} </label>
  </div>
  );
//Topping Choices
  const toppings = [ 'Pepperoni', 'Diced Tomatoes', 'Extra Cheese', 'Pineapple', 'Green Peppers', 'Mushrooms', 'Spinach', 'Onions', 'Three Cheese', 'Roasted Garlic', 'Plant-based Cheese', 'Grilled Chicken', 'Plant-based Chicken', 'Artichoke Hearts'];
//List topping choices in designated area
  const listToppings = toppings.map((topping) => 
  <div className= 'toppings-form'>
    <input name = 'addTopping' type ='checkbox' id={topping} onChange={onChange} />
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
              <option name='size' value=''>Choose a Size</option>
              <option name='size' value='Small'>Small</option>
              <option name='size' value='Medium'>Medium</option>
              <option name='size' value='Large'>Large</option>
              <option name='size' value='XL'>Extra Large</option>
              <option name='size' value='2XL'>2x Extra Large</option>
          </select>
          </div>
        </div>
        <h4>Choose a Sauce</h4>
        <h5>Required</h5>
        <div className='sauce-form'>
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
          placeholder='Knock 3 times, etc...' 
          />
      </div>
      </form>

      <div>
        
        <button className= 'btn' type='submit' onChange ={(e) => {
  e.preventDefault();
  alert(`Order submitted!`)
}}>Submit order</button>
      </div>
    </div>
  )
}

export default PizzaForm;


