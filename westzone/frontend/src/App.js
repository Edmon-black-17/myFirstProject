import React from 'react';
import data from './data';

/*
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  //useEffect(() => {
  //  fetch('/data')
  //    .then((resp) => resp.json())
  //    .then((resp) => {
  //      alert(JSON.stringify(resp, undefined, 9));
  //    });
  //}, []);

  return (
    <BrowserRouter>
      <div classNameName="d-flex flex-column siteContainer">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>w---z---</Navbar.Brand>
              </LinkContainer>
              <Nav classNameName="me-auto">
                <Link to="/cart" classNameName="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge> //a === acumlator, c === currentItem:
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container classNameName="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div classNameName="text-center">All Rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
*/

function App() {
  return (
    <div className="gridContainer">
      <header className="row">
        <div>
          <a className="brand" href="/">
            w---z---
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="cardBody">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">All Right Reserved</footer>
    </div>
  );
}

export default App;
