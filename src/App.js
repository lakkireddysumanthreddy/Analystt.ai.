import React, { useState, useEffect } from "react";
import "./App.css"
function App() {
  
  const [count, setCount] = useState(0);

  
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  
  useEffect(() => {
    console.log("Component is mounted");
  }, []);

  
  useEffect(() => {
    console.log("State changed: Count is now " + count);
  }, [count]);

  return (
    <div className="App">
      <h1 className="count">{count}</h1>
      <button className="addButton" onClick={handleButtonClick}>Add</button>
    </div>
  );
}

export default App;
