import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./Item.css";
const Item = (param) => {
  const props = param.dados;
  const func = param.func;
  const [editar, setEditar] = useState(false);
  return (
    <div>
      <ListGroup.Item id={props.done ? "concluido" : ""}>
        <div className="itens">
          <div className="item">
            <div hidden={editar} className="nomeTarefa">
              <label hidden={editar} htmlFor={props.id}>
                <input
                  defaultChecked={props.done}
                  id={props.id}
                  type="checkbox"
                  onClick={() => func.concluido(props.id, !props.done)}
                />
              </label>
              <div>{props.tarefa}</div>
            </div>
            <div>
              <input
                className="edit"
                hidden={!editar}
                placeholder="Renomeie a tarefa..."
                onChange={(e) => func.editar(props.id, e.target.value)}
                type="text"
              />
            </div>
            <div className="botoes">
              <Button
                disabled={editar}
                onClick={() => func.deletar(props.id)}
                variant="danger"
              >
                <i className="fas fa-trash"></i>
              </Button>
              <Button
                onClick={() => setEditar(!editar)}
                variant={editar ? "info" : "warning"}
              >
                {editar ? (
                  <i className="fas fa-save"></i>
                ) : (
                  <i className="fas fa-edit"></i>
                )}
              </Button>
            </div>
          </div>
          <div hidden={!editar} className="editar">
            {/* func.editar(props.id) */}
          </div>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default Item;
