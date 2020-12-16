import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('exames')
export default class Exame {
   @PrimaryGeneratedColumn('increment')
   IdExame: number;

   @Column()
   NomeExame: string;

   @Column()
   NomeMedicoExame: string;

   @Column()
   InstituicaoExame: string;

   @Column()
   DtaExame: string;

   @Column()
   DescrExame: string;

   @Column()
   ResultExame: string;

   @OneToMany(() => Image, image => image.exame, {
      cascade:['insert', 'update']
   })
   @JoinColumn({name: 'Exame_IdExame'})
   images: Image[];
}