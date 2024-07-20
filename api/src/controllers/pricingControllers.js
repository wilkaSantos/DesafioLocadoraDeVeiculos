const connection = require('../database/knex');

class PricingControllers{

  async create(request, response){
    const { carType, periodType, periodValue } = request.body;
    const userTokenId = request.user.id;

    if(!carType && carType < 0 || !periodType && periodType < 0 || !periodValue){
      return response.json({"mensagem": "Preencher campos obrigatórios."})
    }

    const userExists = await connection('users').where({ idUser: idToken }).first();

    if(!userExists){
      return response.json({"mensagem": "Usuário inválido."});
    }

    if(userExists.userType !== 0){
      return response.json({"mensagem": "Usuário não tem permissão, para realizar está ação."});
    }

    const pricingExists = await connection('pricing').where({ carType }).where({ periodType }).first();

    if(pricingExists){
      return response.json({"mensagem": "Preço já cadastrado para esse tipo."});
    }

    try {
      await connection('pricing').insert({ carType, periodType, periodValue });

    } catch (error) {
      console.log(error);
      return response.json({"mensagem": "Ocorreu um erro ao realizar o cadastro."});
    }  

    return response.json({"mensagem": "Cadastro Concluído."});
  }

  async update(request, response){
    const { idPricing } = request.params;
    const { periodValue } = request.body;
    const userTokenId = request.user.id;

    const userExists = await connection('users').where({ idUser }).first();

    if(userExists.userType !== 0){
      return response.json({"mensagem": "Usuário não tem permissão, para realizar está ação."});
    }

    const pricingUpdated = await connection('pricing').where({ idPricing }).first();

    if(!pricingUpdated){
      return response.json({"mensagem": "Registro não encontrado."});
    }

    await connection('pricing').where({ idPricing }).update({ periodValue });
    
    return response.json({"mensagem": "Registro atualizado."});
  }

  async index(request, response){
    const userTokenId = request.user.id;

    const userExists = await connection('users').where({ idUser }).first();

    if(userExists.userType == 2){
      return response.json({"mensagem": "Usuário não tem permissão, para realizar está ação."});
    }

    const pricingsList = await connection('pricing').select('carType', 'periodType', 'periodValue').orderBy('carType');

    if(!pricingsList){
      return response.json({"mensagem": "Não existe preço cadastrado."});
    }
 
    return response.json({pricingsList});
  }

}

module.exports = PricingControllers;