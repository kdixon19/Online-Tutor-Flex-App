import React, { useState } from 'react';

const TextBox = () => {

    const [value, setValue] = useState('Type your Answer here...');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input type='text' value={value} onChange={handleChange} />
        </div>
      );
}
 
export default TextBox;