import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, aoValidar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formulario.length) {
      console.log(dadosColetados);
    }
  });

  const formulario = [
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} aoValidar={aoValidar} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado por se cadastrar!</Typography>
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>
  <Stepper activeStep={etapaAtual}>
  <Step><StepLabel>Login</StepLabel></Step>
  <Step><StepLabel>Pessoal</StepLabel></Step>
  <Step><StepLabel>Entrega</StepLabel></Step>
  <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formulario[etapaAtual]}
  </>;
}

export default FormularioCadastro;
