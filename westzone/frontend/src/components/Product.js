import React from 'react';
import Rating from './Rating';

export default function Product({product}) {
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="cardBody">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

/*
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product({product}) {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
*/
