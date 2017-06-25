import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ location, getBar, fetchPark}) => (
  <div>
    <Button
      bsStyle="primary"
      onClick={() => getBar(location.latitude, location.longitude)}
    >Primary</Button>
    <Button
      bsStyle="primary"
      onClick={() => fetchPark(location.latitude, location.longitude)}
    >Primary</Button>

  </div>
);
