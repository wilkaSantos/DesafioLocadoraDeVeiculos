
const fs = require('fs');
const path = require('path');
const uploadConfig = require('../configs/upload');

class ManageUpload{

  async salveFile(file){
    
    await fs.promises.rename(
      path.resolve(uploadConfig.tempFolder, file),
      path.resolve(uploadConfig.uploadFolder, file)
    );

    return file;
  }

  async deleteFile(file){
    const filePath = path.resolve(uploadConfig.uploadFolder, file);

    try {
      await fs.promises.stat(filePath)
    } catch (error) {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = ManageUpload;

