const connection = require('../database/knex');
const ManageUpload = require('../providers/manageUpload');

class AvatarControllers {

  async updateUser(request, response){
    const { idUser } = request.params;
    const userTokenId = request.user.id;
    const avatarFileName = request.file.filename;
    const manageUpload = new ManageUpload();
    
    const validateUserToken = await connection('users').where({ idUser: userTokenId }).first();

    if(!validateUserToken){
      return response.json({"mensagem": "Apenas usuários autenticados."});
    }
    
    if(validateUserToken.userType !== 0 && validateUserToken.userType !== 1 && validateUserToken.idUser !== userTokenId){
      return response.json({"mensagem": "Usuário não tem permissão para realizar está ação."});
    }
  
    const userExists = await connection('users').where({ idUser }).first();

    if(!userExists){
      return response.json({"mensagem": "Usuário inválido."});
    }
    
    if(userExists.avatar){
      await manageUpload.deleteFile(userExists.avatar);
    }

    const filename = await manageUpload.salveFile(avatarFileName);
    
    await connection('users').update({ avatar: filename }).where({ idUser });

    return response.json({"mensagem": "Registro atualizado."});
  }

  async updateCar(request, response){
    const userTokenId = request.user.id;
    const imageFileName = request.file.filename;
    const { idCars } = request.params;
    const manageUpload = new ManageUpload();

    const validateUserToken = await connection('users').where({ idUser: userTokenId }).first();

    if(!validateUserToken){
      return response.json({"mensagem": "Apenas usuários autenticados."});
    }
    
    if(validateUserToken.userType !== 0 && validateUserToken.userType !== 1){
      return response.json({"mensagem": "Usuário não tem permissão para realizar está ação."});
    }

    const carExists = await connection('cars').where({ idCars }).first();

    if(!carExists){
      return response.json({"mensagem": "Registro inválido."});
    }

    if(carExists.avatar){
      await manageUpload.deleteFile(userExists.avatar);
    }

    const fileNameCar = await manageUpload.salveFile(imageFileName);
    await connection('cars').update({ avatar: fileNameCar }).where({ idCars });

    return response.json({"mensagem": "Registro atualizado."});
  }
}

module.exports = AvatarControllers;