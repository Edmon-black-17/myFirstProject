//import { useEffect } from 'react';
//import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  //useEffect(() => {
  //  fetch('/data')
  //    .then((resp) => resp.json())
  //    .then((resp) => {
  //      alert(JSON.stringify(resp, undefined, 9));
  //    });
  //}, []);

  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/"> w---z--- </Link>
        </header>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
