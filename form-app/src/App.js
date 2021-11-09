import React, { Component } from "react";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article">
        <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>
        <FormularioCadastro aoValidar={validarCPF} aoEnviar={aoEnviarForm}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length === 11){
    return {valido: true, mensagem: ""};
  }else{
    return {valido: false, mensagem: "CPF deve conter 11 digitos"};
  }
}

export default App;
