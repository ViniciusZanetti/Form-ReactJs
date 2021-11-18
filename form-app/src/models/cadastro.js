function validarCPF(cpf) {
  if (cpf.length === 11) {
    return { valido: true, mensagem: "" };
  } else {
    return { valido: false, mensagem: "CPF deve conter 11 dígitos" };
  }
}


function validarSenha(senha) {
    if(senha.length < 4 || senha.length > 72){
      return {valido: true, mensagem: ""};
    }else{
      return {valido: false, mensagem: "Senha deve ter entre 4 e 72 digitos"};
    }
  }