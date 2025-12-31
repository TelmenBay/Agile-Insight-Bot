import './App.css';
// import { useState } from 'react';


function App() {

  const handleSubmit = () => {
    console.log("Submitted");
  }

  return (
    <div className="App">
      <input placeholder='Paste it here.' label ='Input field'>
      </input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
