import { useEffect, useState } from 'react';

function App() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setNames(data));
  }, []);

  return (
    <ul>
      {names.map((name) =>
        <li key={name}>{name}</li>
      )}
    </ul>
  );
}

export default App;
