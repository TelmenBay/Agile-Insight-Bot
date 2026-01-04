import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setError(null);
    setResults(null);

    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/api/routes`, {      method: 'POST',
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
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
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
        <button className="submitButton" onClick={handleSubmit} disabled={loading || !text}>
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      

      {error && (
        <div className="error" style={{ color: 'red', padding: '20px', marginTop: '20px' }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}

      {results && (
        <div className="results" style={{ marginTop: '30px', padding: '20px', textAlign: 'left' }}>
          <h2>Analysis Results</h2>

          <div style={{ marginBottom: '20px' }}>
            <h3>Sentiment: <span style={{ color: results.sentiment === 'positive' ? 'green' : results.sentiment === 'negative' ? 'red' : 'orange' }}>{results.sentiment}</span></h3>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>Blockers ({results.blockers.length}):</h3>
            <ul>
              {results.blockers.length > 0 ? results.blockers.map((blocker, idx) => (
                <li key={idx}>{blocker}</li>
              )) : <li>None found</li>}
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>Risks ({results.risks.length}):</h3>
            <ul>
              {results.risks.length > 0 ? results.risks.map((risk, idx) => (
                <li key={idx}>{risk}</li>
              )) : <li>None found</li>}
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>Action Items ({results.actionItems.length}):</h3>
            <ul>
              {results.actionItems.length > 0 ? results.actionItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              )) : <li>None found</li>}
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>All Keywords ({results.keywords.length}):</h3>
            <ul>
              {results.keywords.map((keyword, idx) => (
                <li key={idx}>{keyword}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
