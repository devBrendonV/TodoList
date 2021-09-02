import React from "react";
import Button from "react-bootstrap/Button";
const Item = () => {
  return (
    <div>
      <div>
        <label htmlFor="">Todo
          <input type="checkbox" />
        </label>
        <Button variant="danger">Delete</Button>
        <Button variant="warning">Edit</Button>
      </div>
    </div>
  );
};

export default Item;
