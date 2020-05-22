import React, { useState } from 'react';

const Form = () => {
  const [ formState, setFormState ] = useState({
    size: '',
    sauce: '',
    toppings: '',
    sub: '',
    special: ''
});

const [ errors, setErrors ] = useState({
  size: '',
  sauce: '',
  toppings: '',
});

const onInputChange = (e) => {
  e.persist();

  const newFormData = {
      ...formState,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  };
  //validateChange(e);
  setFormState(newFormData);
};

  //const [ choice, onInputChange, onSubmit ] = props;
  
  return (
    <div>
      header here
    <div className='dropdown-section'>
      <div className='radio-form'>
      <label>
        <h3>Choice of Size</h3>
        <p>Required</p>
        {/* add later to select  value={choice.size} onChange={onInputChange} and een handleres to all forms*/}
          <select name='size'>
              <option value='' >Choose a Size</option>
              <option value='Small' onChange={onInputChange}>Small</option>
              <option value='Medium' onChange={onInputChange}>Medium</option>
              <option value='Large' onChange={onInputChange}>Large</option>
              <option value='X-Large' onChange={onInputChange}>X-Large</option>
          </select>
        </label>
      </div>
    </div>

      <div className='section'>
        <h3>Choice of Sauce</h3>
        <p>Required</p>
       <label>
        <div className='form'>
        <p><input type='radio' onChange={onInputChange}/> Original Red</p>
        <p><input type='radio' onChange={onInputChange}/> Garlic Ranch</p>
        <p><input type='radio' onChange={onInputChange}/> BBQ Sauce</p>
        <p><input type='radio' onChange={onInputChange}/> Spinach Alfredo</p>
        </div>
        </label>
      </div>

      <div className='section'>
        <h3>Add Toppings</h3>
        <p>Choose up to 10</p>
       <label>
        <div className='form'>
          <p>
            <input 
            name='pepperoni' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Pepperoni
            </p>
            <p>
            <input 
            name='sausage' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Sausage
            </p>
            <p>
            <input 
            name='bacon' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Bacon
            </p>
            <p>
            <input 
            name='avocado' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Avocado
            </p>
            <p>
            <input 
            name='extra-cheese' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Extra Cheese
            </p>
            <p>
            <input 
            name='mushrooms' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Mushrooms
            </p>
            <p>
            <input 
            name='bell-peppers' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Bell Peppers
            </p>
            <p>
            <input 
            name='tomatoes' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Tomatoes
            </p>
            <p>
            <input 
            name='sweet-potato' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Sweet Potato
            </p>
            <p>
            <input 
            name='pineapple' 
            type='checkbox'
            checked={false}
            onChange={onInputChange}
            /> Pineapple
            </p>
            
        </div>
        </label>
      </div>

      <div className='section'>
        <h3>Choice of Substitute</h3>
        <p>Choose up to 1</p>
       <label>
        <div className='form'>
         <input name='sub' type='checkbox' onChange={onInputChange}/> Gluten Free Crust (+1.00)
        </div>
        </label>
      </div>

      <div className='section'>
        <h3>Special Instructions</h3>
       <label>
        <div className='form'>
         <input name='special' type='text' onChange={onInputChange}/> 
        </div>
        </label>
      </div>

      <div className='section'>
        <hr />
       <label>
        <div className='form'>
         counter thing increase/ decrease
         <button>Add to order $17.99</button>
        </div>
        </label>
      </div>

    </div>
  )
}

export default Form;
