function senhaValida(senha) {
  if (senha.length < 4) {
    return false;
  } else {
    return true;
  }
}
function cpfValido(cpf) {
  if (cpf.length < 11) {
    return false;
  } else {
    let regex = /\d/;
    if (cpf.regex.test(cpf)) {
      return true;
    } else {
      return false;
    }
  }
}
function formulario() {
  let form = document.getElementById("formulario");
  if (!senhaValida(form[1].value)) {
    alert("senha invalidá!");
  } else if (!cpfValido(form[2].value)) {
    alert("cpf inválido! Use apenas digitos");
  } else if (!senhaValida(form[3].value)) {
    alert("nome inválido!");
  } else alert("Cadastrado com sucesso!");
}
