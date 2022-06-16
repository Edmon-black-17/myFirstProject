import React from 'react';

export default function LoadingBox() {
  return (
    <div>
      <i className="fa fa-spinner fa- spin"></i> Loading...
    </div>
  );
}

/*
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visuallyHidden">Loading.....</span>
    </Spinner>
  );
}
*/
