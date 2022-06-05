import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('/data')
      .then((resp) => resp.json())
      .then((resp) => {
        alert(JSON.stringify(resp, undefined, 4));
      });
  }, []);

  return (
    <div>
      <header>
        <a href="/"> fff</a>
      </header>

      <main>list products</main>
    </div>
  );
}

export default App;
