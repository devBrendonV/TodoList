import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import Cadastrados from "./Cadastrados";
import axios from "axios";
import CardComponent from "./CardComponent";
const URL = "http://localhost:3050/api/list";

const Content = () => {
  const [data, setData] = useState([]);

  const [texto, setTexto] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState();
  const [alterando, setAlterando] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [dados, setDados] = useState([]);

  async function puxardados(pesquisa, tipo) {
    const search = pesquisa ? `&${tipo}__regex=/${pesquisa}/` : "";
    const resp = await axios.get(`${URL}?sort=-createdAt${search}`);
    setData(resp.data);
  }

  function refresh() {
    const mapeado = data.map((props) => {
      return (
        <CardComponent
          key={props._id}
          dados={{
            _id: props._id,
            nome: props.nome,
            email: props.email,
            idade: props.idade,
            description: props.description,
            done: props.done,
            edit: props.edit,
            alterando: alterando,
          }}
          fun={{
            concluido: concluido,
            deletar: deletar,
            editar: editar,
            alterarDados: alterarDados,
          }}
        ></CardComponent>
      );
    });
    setDados(mapeado);
  }

  useEffect(() => {
    refresh();
  }, [data]);

  useEffect(() => {
    puxardados();
  }, [alterando]);

  function concluido(param, estado) {
    axios.put(`${URL}/${param}`, { done: !estado });
    puxardados(texto);
  }
  function deletar(param) {
    axios.delete(`${URL}/${param}`);
    puxardados(texto);
  }
  function editar(param, estado) {
    axios.put(`${URL}/${param}`, { edit: !estado });
    puxardados(texto);
  }
  function alterarDados(param, novoemail, novaidade, novadescricao) {
    setAlterando(true);
    axios
      .put(`${URL}/${param}`, {
        email: novoemail,
        idade: novaidade,
        description: novadescricao.toUpperCase(),
      })
      .then(() =>
        setTimeout(() => {
          setAlterando(false);
        }, 2000)
      );
  }

  function cadastrar() {
    setCarregando(true);
    axios
      .post(URL, {
        nome: nome.toUpperCase(),
        idade: idade,
        description: descricao.toUpperCase(),
        email: email,
      })
      .then(() => {
        setTimeout(() => {
          setMensagem("certo");
          setTimeout(() => {
            setMensagem();
            setNome("");
            setIdade("");
            setEmail("");
            setDescricao("");
            setCarregando(false);
          }, 2000);
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          setMensagem("erro");
          setTimeout(() => {
            setMensagem();
            setCarregando(false);
          }, 2000);
        }, 1000);
      });
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <TodoForm
            estado={{
              nome: nome,
              idade: idade,
              email: email,
              descricao: descricao,
              mensagem: mensagem,
              carregando: carregando,
            }}
            fun={{
              setNome: setNome,
              setIdade: setIdade,
              setEmail: setEmail,
              setDescricao: setDescricao,
              cadastrar: cadastrar,
            }}
          />
        </Route>
        <Route path="/cadastrados">
          <Cadastrados
            fun={{
              setTexto: setTexto,
              puxardados: puxardados,
              dados: dados,
              texto: texto,
            }}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
