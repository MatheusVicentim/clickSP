import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Exame from './Exame';

//Declara que a classe  está relacionada a tabla orphanages
@Entity('images')
export default class Image {
   //Declara que a variavel é uma primary key e é auto increment
   @PrimaryGeneratedColumn('increment')
   IdImage: number;

   @Column()
   CaminhoImg: string;

   // Faz relação com o orfanato dizendo que o orfanado pode ter mutias imagens, mas uma imagem pertence apenas um orfanato
   @ManyToOne(() => Exame, exame => exame.images)
   @JoinColumn({ name:'Exame_IdExame'})
   exame: Exame;
}