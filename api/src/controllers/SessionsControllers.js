const connection = require('../database/knex');
const bcrypt = require('bcryptjs');
const authConfig = require('../configs/auth');
const { sign } = require('jsonwebtoken');

class SessionsControllers{

  async create(request, response){
    const { email, password } = request.body;

    const userExists = await connection('users').where({ email }).first();

    if(!userExists){
      console.log('user entrou');
      return response.json({"mensagem": "Email ou senha incorreto."});
    }

    const passwordMatch = await bcrypt.compare(password, userExists.password);
    
    if(!passwordMatch){
      return response.json({"mensagem": "Email ou senha incorreto."});
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(userExists.idUser),
      expiresIn
    });
    
    return response.json({ token });
  }

}

module.exports = SessionsControllers;

