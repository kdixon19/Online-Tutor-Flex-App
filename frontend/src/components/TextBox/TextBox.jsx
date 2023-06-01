import React, { useState } from 'react';

const TextBox = () => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label>Enter your Answer here...</label>
            <input type='text' value={value} onChange={handleChange} />
            <button>submit</button>
        </div>
      );
}
 
export default TextBox;