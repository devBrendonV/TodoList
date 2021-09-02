import React from "react";
import Button from "react-bootstrap/Button";
import "./Item.css";
const Item = (param) => {
  const props = param.dados
  const func = param.func
  return (
    <div className="principal">
      <div className="itens">
        <div className="item">
          <label htmlFor="">
            <input type="checkbox" />
            <span>{props.tarefa}</span>
          </label>
          <div className="botoes">
            <Button onClick={()=>func.deletar(props.id)} variant="danger">Deletar</Button>
            <Button onClick={()=>func.editar(props.id)} variant="success">Editar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
