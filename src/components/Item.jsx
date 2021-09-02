import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Item.css";
const Item = () => {
  return (
    <div className="principal">
      <div className="mensagem">
        <span>
          <strong>Sucesso!</strong> Tarefa criada
        </span>
      </div>
      <div className="adicionarTarefa">
        <InputGroup className="mb-3">
          <Form.Control aria-describedby="basic-addon2" />
          <Button id="basic-addon2">Add</Button>
        </InputGroup>
      </div>
      <div className="itens">
        <div className='item'>
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
