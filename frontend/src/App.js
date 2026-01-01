import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    fetch(`http://localhost:5000/api/routes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status} HTTP error`);
        }
        return res.json();
      })
      .catch((err) => console.error(err))
  };

  return (
    <div className="App">
      <div className="inputContainer">
        <h1>Agile Insights</h1>
        <textarea
          className="textInput"
          placeholder="Paste it here."
          aria-label="Input field"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="submitButton" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
