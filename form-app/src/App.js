import React, { Component } from "react";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarSenha,
          }}>

        </ValidacoesCadastro.Provider>
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
