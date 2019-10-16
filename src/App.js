import React, { useState, useEffect} from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(async() => {
    const response = await fetch('https://api.ggithub.com/users/diego3g');
    const data = response.json();

    setRepositories(data);
  }, []);

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}

export default App;
