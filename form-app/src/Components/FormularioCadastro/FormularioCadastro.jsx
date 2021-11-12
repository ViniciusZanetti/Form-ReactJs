import { Typography } from "@material-ui/core";
import React, {useState} from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, aoValidar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo(){
    setEtapaAtual(etapaAtual + 1);
  }

  function FormularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuarios aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} aoValidar={aoValidar}/>;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }

  return (
    <>
      {FormularioAtual(etapaAtual)}
    </>
  );
}



export default FormularioCadastro;


