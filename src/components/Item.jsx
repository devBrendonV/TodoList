import React from "react";
import Button from "react-bootstrap/Button";
import "./Item.css";
const Item = () => {
  return (
    <div className="principal">
      <div className="itens">
        <div className="item">
          <label htmlFor="">
            <input type="checkbox" />
            <span>Nome Item</span>
          </label>
          <div className="botoes">
            <Button variant="danger">Deletar</Button>
            <Button variant="success">Editar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
