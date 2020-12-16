import Image from '../models/Image';

//Altera como os dados são mostrados para usuário, bom para não precisar mudar diretamente a Controller
export default {
   render(image: Image) {
      return {
         IdImage: image.IdImage,
         //Pesquisar variaveis ambient dotenv
		 //Web
         url: `http://localhost:3330/uploads/${image.CaminhoImg}`,
		 //Celular
         // url: `http://192.168.1.105:3330/uploads/${image.CaminhoImg}`,

      };
   },

   renderMany(images: Image[]) {
      return images.map(image => this.render(image));
   }
};