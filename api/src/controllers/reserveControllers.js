const calculateValue = require('../utils/calculatingReserveValue');
const convertDate  = require('../utils/convertDate');
const connection = require('../database/knex');

class ReserveControllers{

  async create(request, response){
    const { idUser, idCars, qtd, period, dateWithdraw, dateDelivery, paymentMethod, situation, paymentStatus } = request.body;
   
    if( !qtd && qtd > 0 || !dateWithdraw || !dateDelivery ){
      return response.json({"mensagem": "Preencher os dados obrigatórios."});
    }

    const typeSearch = await connection('cars').where({ idCars }).first();

    const pricing = await connection('pricing').select('periodValue').where({ carType: typeSearch.carType }).where({ periodType: period }).first();

    if(!pricing.periodValue){
      return response.json({"mensagem": "Não existe dados para esse tipo com esta período."});
    }

    const totalRentalValue = await calculateValue(qtd, period, pricing.periodValue);
    
    const userChecked = await connection('reserve').where({ idUser }).first();

    if(userChecked && userChecked.situation !== 2){
      return response.json({"mensagem": "Usuário já possui uma locação ativa."});
    }

    const datecurrentDate = await convertDate();

    if(dateWithdraw < datecurrentDate){
      return response.json({"mensagem": "A data de retirada não deve ser menor que a data atual."});
    }

    if(dateDelivery === dateWithdraw){
      return response.json({"mensagem": "A data de entrega não pode ser igual a data de retirada."});
    }

    await connection('reserve').insert({ idUser, idCars, qtd, period, vlrRent: totalRentalValue, dateWithdraw, dateDelivery, paymentMethod, situation, paymentStatus });

    return response.json({"mensagem": "Cadastro concluído."});
  }

  async update(request, response){
    const { idReserve } = request.params;
    const { idCars, qtd, paymentMethod } = request.body;
    const userTokenId = request.user.id;

    const userExists = await connection('users').where({ idUser }).first();

    if(!userExists){
      return response.json({"mensagem": "Usuário inválido."});
    }

    const reserveExists = await connection('reserve').where({ idReserve }).first();

    if(!reserveExists){
      return response.json({"mensagem": "Registro não encontrado."});
    }
    
    if(qtd <= 0){
      return response.json({"mensagem": "Quantidade deve ser superior a 0 zero."});
    }

    await connection('reserve').where({ idReserve }).update({
      idCars: idCars ? idCars : reserveExists.idCars,
      qtd: qtd ? qtd : reserveExists.qtd,
      paymentMethod: paymentMethod ? paymentMethod : reserveExists.paymentMethod
    });

    return response.json({"mensagem": "Registro atualizado."});
  }

  async index(request, response){
    const userTokenId = request.user.id;

    const userExists = await connection('users').where({ idUser }).first();

    if(!userExists){
      return response.json({"mensagem": "Usuário inválido."});
    }

    if(userExists.usertype === 2){
      const myReservations = await connection('reserve').where({ idUser });
    }

    const reservations = await connection('reserve').select().orderBy('idUser');

    return response.json(reservations);
  }

}

module.exports = ReserveControllers;