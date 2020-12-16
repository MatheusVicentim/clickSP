import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import ExamesController from './controllers/ExamesController';

const routes = Router();
const upload = multer(uploadConfig);

//Lista Exames
routes.get('/exames',ExamesController.index);
//Lista exame especifico
routes.get('/exames/:IdExame',ExamesController.show);
//Cadastrar novo exame
routes.post('/exames', upload.array('images'), ExamesController.create);

export default routes;