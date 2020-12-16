import multer from 'multer';
import path from 'path'; //gerencia os caminhos relativos

export default {
   storage: multer.diskStorage({
      //_dirname: descreve o diretorio atual que esta esse arquivo
      destination: path.join(__dirname, '..', '..', 'uploads'),
      filename: (request, file, cb) => {
         const filename = `${Date.now()}-${file.originalname}`; 

         cb(null, filename);
      },
   })
};