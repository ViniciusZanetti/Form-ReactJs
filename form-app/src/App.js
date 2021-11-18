import React, { Component } from "react";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import {validarCPF, validarSenha} from "./models/cadastro"

class App extends Component {
  render() {
    return (
      <Container component="article">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <FormularioCadastro validacoes={{cpf: validarCPF, senha: validarSenha}} aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
