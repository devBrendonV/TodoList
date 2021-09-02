import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./Item.css";
const Item = (param) => {
  const props = param.dados;
  const func = param.func;
  const [editar, setEditar] = useState(false)
  return (
    <div >
        <ListGroup.Item id={props.done ? "concluido" : ''}>
          <div className="itens">
            <div className="item">
              <label hidden={editar} htmlFor="item">
                <input checked={props.done} id='item' name="item" type="checkbox" onClick={()=>func.concluido(props.id,!props.done)}/>
                <span>{props.tarefa}</span>
              </label>
              <input  hidden={!editar} placeholder="Renomeie a tarefa..." onChange={(e)=>func.editar(props.id,e.target.value)} type="text" />
              <div className="botoes">
                <Button disabled={editar} onClick={() => func.deletar(props.id)} variant="danger">
                  Deletar
                </Button>
                <Button onClick={() => setEditar(!editar)} variant={editar ? "info": "success"}>
                  {editar ? 'Salvar': 'Editar'}
                </Button>
              </div>
            </div>
            <div hidden={!editar} className='editar'>
              
            {/* func.editar(props.id) */}
            </div>
          </div>
        </ListGroup.Item>
    </div>
  );
};

export default Item;
