
const validatePassword = (password) => {
  let message;

  if(password.length !== 8){
    return message = {"mensagem": "A senha deve conter 8 caracteres."};
  }

  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return message = {"mensagem": "A senha deve conter apenas letras e números."};
  }

  for (let i = 0; i < password.length; i++) {
    if (password.indexOf(password[i]) !== password.lastIndexOf(password[i])) {
      return message = {"mensagem": "A senha não deve conter caracter repetido."};
    }
  }

  for (let i = 0; i < password.length - 2; i++) {
    if (password.charCodeAt(i + 1) === password.charCodeAt(i) + 1 && password.charCodeAt(i + 2) === password.charCodeAt(i) + 2) {
      return message = {"mensagem": "A senha não deve conter caracteres em sequência."};
    }
  } 

}

module.exports = validatePassword;