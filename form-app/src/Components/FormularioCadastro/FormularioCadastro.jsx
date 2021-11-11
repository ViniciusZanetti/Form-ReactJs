import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, aoValidar }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} aoValidar={aoValidar}/>
      <DadosUsuarios />
    </>
  );
}
export default FormularioCadastro;
