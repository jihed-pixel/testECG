import React from 'react';
import tailwind from 'tailwind-rn';

const InputRd = (props) => {
    return (
  
      <>
        <div class="form-check mx-4">
      <label style={tailwind('text-gray-700 text-lg py-2')}class="form-check-label" for={props.id}>
      <input  id={props.id}  type="radio" value={props.value} name={props.name}
      onChange={(value) => props.onChange(value)} />{props.name1}
      </label>
      </div>
      </>
    );
  };
  
  export default InputRd;