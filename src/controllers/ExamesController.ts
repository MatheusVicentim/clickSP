import { Request, Response, request } from 'express';
import { getRepository } from 'typeorm';

import * as Yup from 'yup';
import Exame from '../models/Exame';
import exameView from '../views/exames_views';

export default {
  //Busca todas as informações
  async index(request: Request, response: Response) {
    const examesRepository = getRepository(Exame);

    const exames = await examesRepository.find({
      relations: ['images']
    });

    return response.json(exameView.renderMany(exames));
  },

  //Busca informações	especifica
  async show(request: Request, response: Response) {
    const { IdExame } = request.params;
    const exameRepository = getRepository(Exame);

    const exame = await exameRepository.findOneOrFail(IdExame, {
      relations: ['images']
    });

    return response.json(exameView.render(exame));
  },

  async create(request: Request, response: Response) {

    const {
      NomeExame,
      NomeMedicoExame,
      InstituicaoExame,
      DtaExame,
      DescrExame,
      ResultExame
    } = request.body;

    const examesRepository = getRepository(Exame);

    //Para recupear as imagens de
    // as define o tipo da variavel, nesse ponto definira que ele é um array de arquivos
    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { CaminhoImg: image.filename };
    })

    const data = {
      NomeExame,
      NomeMedicoExame,
      InstituicaoExame,
      DtaExame,
      DescrExame,
      ResultExame,
      images
    };

    const schema = Yup.object().shape({
      NomeExame: Yup.string().required('Nome Exame Obrigatório!'),//Passa a descrição para erro
      NomeMedicoExame: Yup.string().required().max(300),
      InstituicaoExame: Yup.string().required(),
      DtaExame: Yup.string().required(),
      DescrExame: Yup.string().required(),
      ResultExame: Yup.string().required(),
      images: Yup.array(
        Yup.object().shape({
          CaminhoImg: Yup.string().required(),
        })
      )
    });

    await schema.validate(data, {
      //Retorna todos os erros
      abortEarly: false,
    });

    const exame = examesRepository.create(data);

    //await força este processo terminar para seguir com a execução
    await examesRepository.save(exame);

    return response.status(201).json(exame);
  }
};