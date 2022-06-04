import React from 'react';

const url = 'https://api.adviceslip.com/advice';

const App = () => {
  const [advice, setAdvice] = React.useState('advice');

  const fetchAdvice = async () => {
    const res = await fetch(url, { method: 'GET' });
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  React.useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1>{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>new advice</span>
        </button>
      </div>
    </div>
  );
};

export default App;
