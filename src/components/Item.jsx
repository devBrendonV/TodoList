import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./Item.css";
const Item = (param) => {
  const props = param.dados;
  const func = param.func;
  const [editar, setEditar] = useState(false)
  return (
    <div>
        <ListGroup.Item>
          <div className="itens">
            <div className="item">
              <label htmlFor="item">
                <input name="item" type="checkbox" />
                <span>{props.tarefa}</span>
              </label>
              <div className="botoes">
                <Button disabled={editar} onClick={() => func.deletar(props.id)} variant="danger">
                  Deletar
                </Button>
                <Button onClick={() => func.editar(props.id)} variant="success">
                  Editar
                </Button>
              </div>
            </div>
            <div className='editar'>

            </div>
          </div>
        </ListGroup.Item>
    </div>
  );
};

export default Item;
