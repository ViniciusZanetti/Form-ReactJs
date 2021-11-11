import { TextField, Container, Button } from "@material-ui/core";
import React from "react";

function DadosUsuarios() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        label="senha"
        type="password"
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
