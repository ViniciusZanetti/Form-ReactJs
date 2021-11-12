import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, aoValidar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formulario = [
    <DadosUsuarios aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} aoValidar={aoValidar} />,
    <DadosEntrega />,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formulario[etapaAtual]}</>;
}

export default FormularioCadastro;
