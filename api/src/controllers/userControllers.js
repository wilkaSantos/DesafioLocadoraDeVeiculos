const connection = require('../database/knex');
const validatePassword = require('../utils/passwordValidator');
const { hash, compare } = require('bcryptjs');

class UserControllers{

  async create(request, response){
    const { userType, 
            name, 
            cpfCnpj, 
            email, 
            phone, 
            password, 
            road, 
            number, 
            district, 
            county, 
            state } = request.body;
    
    if(!name || !cpfCnpj || !email || !phone || !password || !road || !number || !district ||!county || !state){
      return response.json({"mensagem": "Preencher dados obrigatórios."});
    }

    if(cpfCnpj.length !== 11 && cpfCnpj.length !== 14){
      return response.json({"mensagem": "CPF/CNPJ inválido."});
    }

    if(email.length < 9){
      return response.json({"mensagem": "E-mail inválido."});
    }

    if(phone.length < 11){
      return response.json({"mensagem": "Telefone inválido."});
    }
    
    const passwordChecked = validatePassword(password);

    if(passwordChecked){
      return response.json(passwordChecked);
    }

    const userExists = await connection('users').where({ cpfCnpj }).first();

    if(userExists){
      return response.json({"mensagem": "Usuário já cadastrado."});
    }

    const passwordHash = await hash(password, 7);

    await connection('users').insert({ userType, 
                                        name, 
                                        cpfCnpj, 
                                        email, 
                                        phone, 
                                        password: passwordHash, 
                                        road, 
                                        number, 
                                        district, 
                                        county, 
                                        state });

    return response.json({"mensagem": "Cadastro concluído."});
  }

  async update(request, response){

    const { idUser } = request.params;
    const { name, cpfCnpj, email, phone, newPassword, oldPassword, road, number, district, county, state } = request.body;

    const userExists = await connection('users').where({ idUser }).first();

    if(!userExists){
      return response.json({"mensagem": "Usuário inválido."});
    }

    const emailExists = await connection('users').where({ email }).first();

    if(emailExists){
      return response.json({"mensagem": "E-mail encontra-se em uso."});
    }

    if(newPassword && !oldPassword){
      return response.json({"mensagem": "Necessário preencher a senha nova e antiga."});
    }

    if(newPassword && oldPassword){
      const passwordChecked = await compare(oldPassword, userExists.password);

      if(!passwordChecked){
        return response.json({"mensagem": "Senha antiga não conferi."});
      }
    }

    const newPasswordHashed = await bcrypt.hash(newPassword, 7);

    await connection('users').where({ idUser }).update({
      name: name ? name : userExists.name, 
      cpfCnpj: cpfCnpj ? cpfCnpj : userExists.cpfCnpj, 
      email:  email ? email : userExists.email, 
      phone: phone ? phone : userExists.phone, 
      password: newPasswordHashed ? newPasswordHashed : userExists.password,
      road: road ? road : userExists.road,
      number: number ? number : userExists.number,
      district:  district ? district : userExists.district,
      county: county ? county : userExists.county,
      state: state ? state : userExists.state
    });

    return response.json({"mensagem": "Registro atualizado."});
  }

  async index(request, response){
    const userList = await connection('users').select().orderBy('name');
  
    if(userList.length < 1){
      return response.json({"mensagem": "Não existem dados cadastrados."});
    }

    return response.json({ userList });
  }

}

module.exports = UserControllers;