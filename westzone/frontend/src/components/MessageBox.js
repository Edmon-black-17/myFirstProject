import React from 'react';
import './MessageBox.css';

export default function MessageBox(props) {
  return <div className={`alert alert-${props.variant || 'info'}`}>
    {props.children}
  </div>;
}

/*
import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
*/
