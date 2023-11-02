import React from "react";
import { useState } from "react";


const MyComponent = () => {
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        <div></div>
        
        <input type="text" value={inputValue} onChange={handleChange} />

      </div>
    );
  };
export default MyComponent;  