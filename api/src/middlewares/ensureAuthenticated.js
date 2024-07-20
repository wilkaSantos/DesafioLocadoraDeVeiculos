const { verify } = require('jsonwebtoken');
const authConfig = require('../configs/auth');

function ensureAuthenticated(request, response, next){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    return response.json({"mensagem": "Token não informado."})
  }

  const [, token] = authHeader.split(" ");

  try{
    const { sub: id } = verify(token, authConfig.jwt.secret);

    request.user = {
      id: Number(id),
    }

    return next();
  }catch{
    return response.json({"mensagem": "Token inválido."})
  }

}

module.exports = ensureAuthenticated;