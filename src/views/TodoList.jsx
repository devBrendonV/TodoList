import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
const URL = "http://localhost:3080/api/todolist";

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
          <Item dados={{ data: data }} func={(deletar, editar)} />
        </div>
      );
    });
    setDados(mapeado);
  }
  useEffect(() => {
    mapear();
  }, [data]);

  function adicionar() {
    axios.post(URL).then(() => {
      setCadastrou(!cadastrou);
      setTexto("");
      setTimeout(() => {
        setCadastrou(!cadastrou);
      }, 2000);
    });
  }
  function deletar(param) {
    axios.delete(`${URL}/${param}`);
  }
  function editar(param, estado) {
    axios.put(`${URL}/${param}`, { edit: !estado });
  }
  return (
    <div className="principal">
      <div hidden={!cadastrou} className="mensagem">
        <span >
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
