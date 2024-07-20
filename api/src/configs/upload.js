const path = require('path');
const multer = require('multer');
const cryptography = require('crypto');

const tempFolder = path.resolve(__dirname, '..', '..', 'temp');
const uploadFolder = path.resolve(tempFolder, 'uploads');

const Multer = {
  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback){
      const fileHash = cryptography.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    }
  })
}

module.exports = { tempFolder, uploadFolder, Multer }