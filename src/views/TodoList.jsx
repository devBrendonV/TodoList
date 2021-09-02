import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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
        <div>
          <Item
            dados={{ id: props._id, tarefa: props.tarefa, done: props.done }}
            func={{deletar:deletar,editar:editar}}
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
    axios.post(URL,{tarefa:prop}).then(() => {
      setCadastrou(true);
      setTexto("");
      setTimeout(() => {
        setCadastrou(false);
        load();
      }, 2000);
    });
  }
  function deletar(param) {
    axios.delete(`${URL}/${param}`);
    load()
  }
  function editar(param, estado) {
    axios.put(`${URL}/${param}`, { edit: !estado });
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
          <Button id="basic-addon2" onClick={() => adicionar(texto)}>
            Add
          </Button>
        </InputGroup>
      </div>

      {dados}
    </div>
  );
};

export default TodoList;
