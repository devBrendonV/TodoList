import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
const URL = "http://localhost:3080/api/todolist";

const TodoList = () => {
  const [texto, setTexto] = useState("");
  const [data, setData] = useState([]);
  const [dados, setDados] = useState([]);
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

  function deletar(param) {
    axios.delete(URL);
  }
  function editar(param) {
    axios.put(URL);
  }

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

      {dados}
    </div>
  );
};

export default TodoList;
