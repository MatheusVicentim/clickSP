import Exame from '../models/Exame';
import images_views from './images_views';


//Altera como os dados são mostrados para usuário, bom para não precisar mudar diretamente a Controller
export default {
  render(exame: Exame) {
    return {
      IdExame: exame.IdExame,
      NomeExame: exame.NomeExame,
      NomeMedicoExame: exame.NomeMedicoExame,
      InstituicaoExame: exame.InstituicaoExame,
      DtaExame: exame.DtaExame,
      DescrExame: exame.DescrExame,
      ResultExame: exame.ResultExame,
      images: images_views.renderMany(exame.images),
    };
  },

  renderMany(exame: Exame[]) {
    return exame.map(exame => this.render(exame));
  }
};