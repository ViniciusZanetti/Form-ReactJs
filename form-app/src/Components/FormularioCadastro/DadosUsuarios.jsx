import { TextField, Container, Button } from "@material-ui/core";
import React from "react";

function DadosUsuarios({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        label="senha"
        type="password"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuarios;
