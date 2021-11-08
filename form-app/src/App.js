import React, { Component } from "react";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Formulario de Cadastro</h1>
        <FormularioCadastro/>
      </div>
    );
  }
}

export default App;
