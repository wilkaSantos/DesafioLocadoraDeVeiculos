const connection = require('../database/knex');

class CarControllers{

  async create(request, response){
    const { name, engineType, plate, color, model, avatar, carType } = request.body;
    const userTokenId = request.user.id;

    const userExists = await connection('users').where({ idUser: idToken }).first();

    if(userExists.usertype == 2){
      return response.json({"mensagem": "Usuário não tem permissão, para realizar esta ação."});
    }

    if(!name || !engineType || !plate || !color || !model){
      return response.json({"mensagem": "Preencher dados obrigatórios."});
    }

    const carExists = await connection('cars').where({ plate }).first();

    if(carExists){
      return response.json({"mensagem": "Carro já cadastrado."});
    }

    await connection('cars').insert({ name, engineType, plate, color, model, avatar, carType });

    return response.json({"mensagem": "Cadastro concluído."})
  }

  async update(request, response){
    const { idCars } = request.params;
    const { name, engineType, plate, color, model, avatar } = require.body;
    const userTokenId = request.user.id;

    const userExists = await connection('users').where({ idUser: idToken }).first();

    if(userExists.usertype == 2){
      return response.json({"mensagem": "Usuário não tem permissão, para realizar esta ação."});
    }

    const carExists = await connection('cars').where({ idCars }).first();

    if(!carExists){
      return response.json({"mensagem": "Registro inválido."});
    }

    await connection('cars').where({ idCars }).update({
      name: name ? name : carExists.name,
      engineType: engineType ? engineType : carExists.engineType,
      plate: plate ? plate : carExists.plate,  
      color: color ? color : carExists.color,
      modelo: model ? model : carExists.model,
      avatar: avatar ? avatar : carExists.avatar 

    });

    return response.json({"mensagem": "Registro atualizado."});
  }

  async show(request, response){
    const { idCars } = request.body;
    const userTokenId = request.user.id;

    const userExists = await connection('users').where({ idUser: idToken }).first();
    
    if(!userExists){
      return response.json({"mensagem": "Usuário inválido."});
    }

    const carSearch = await connection('cars').where({ idCars }).first();

    if(!carSearch){
      return response.json({"mensagem": "Registro inválido."});
    }

    return response.json({ carSearch });
  }

  async index(request, response){
    const carList = await connection('cars').select().orderBy('carType');

    if(!carList.value){
      return response.json({"mensagem": "Não existe registro cadastrado."});
    }

    return response.json(carList);
  }
}

module.exports = CarControllers;