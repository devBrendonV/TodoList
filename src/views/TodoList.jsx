import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
const URL = "http://localhost:3010/api/todolistt";

const TodoList = () => {
  const [texto, setTexto] = useState("");
  const [data, setData] = useState([]);
  const [dados, setDados] = useState([]);
  const [cadastrou, setCadastrou] = useState(false); // controle da mensagem de sucesso ao cadastrar

  async function load() {
    const resp = await axios.get(`${URL}?sort=-createdAt$`);
    setData(resp.data);
  }
  function mapear() {
    const mapeado = data.map((props) => {
      return (
        <div key={props._id}>
          <Item
            dados={{ id: props._id, tarefa: props.tarefa, done: props.done }}
            func={{ deletar: deletar, editar: editar, concluido: concluido }}
          />
        </div>
      );
    });
    setDados(mapeado);
  }
  useEffect(() => {
    mapear();
  }, [data]);
  useEffect(() => {
    load();
  }, []);
  function adicionar(prop) {
    axios.post(URL, { tarefa: prop }).then(() => {
      setCadastrou(true);
      setTexto("");
      setTimeout(() => {
        setCadastrou(false);
        load();
      }, 2000);
    });
  }
  function deletar(param) {
    axios.delete(`${URL}/${param}`).then(() => {
      load();
    });
  }
  function editar(param, novatarefa) {
    axios.put(`${URL}/${param}`, { tarefa: novatarefa }).then(() => {
      load();
    });
  }
  function concluido(param, estado) {
    axios.put(`${URL}/${param}`, { done: estado }).then(() => {
      load();
    });
  }
  return (
    <div className="principal">
      <div hidden={!cadastrou} className="mensagem">
        <span>
          <strong>Sucesso!</strong> Tarefa criada
        </span>
      </div>
      <div className="adicionarTarefa">
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setTexto(e.target.value)}
            value={texto}
            aria-describedby="basic-addon2"
          />
          <Button
            variant="primary"
            disabled={cadastrou || !texto ? true : false}
            id="basic-addon2"
            onClick={() => adicionar(texto)}
          >
            <i className="fas fa-calendar-plus"></i>
          </Button>
        </InputGroup>
      </div>
      <ListGroup>{dados.length == 0 ? <span className='semTarefas'>Nenhuma tarefa pendente...</span> :dados }</ListGroup>
    </div>
  );
};

export default TodoList;
