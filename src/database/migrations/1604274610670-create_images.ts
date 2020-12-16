import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1604274610670 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
         name: 'images',
         columns: [
            {
               name: 'IdImage',
               type: 'integer',
               unsigned: true,
               isPrimary: true,
               isGenerated: true,
               generationStrategy: 'increment',
            },
            {
               // Caminho da imagem
               name: 'CaminhoImg',
               type: 'varchar',
            },
            {
               name: 'Exame_IdExame',
               type: 'integer',
            }
         ],
         foreignKeys: [
            {
               name: 'ImageExame',
               columnNames: ['Exame_IdExame'],
               referencedTableName: 'exames',
               referencedColumnNames: ['IdExame'],
               onUpdate: 'CASCADE',// Cria uma opção para se alterar um orphanage o id da refe^rência atualiza tbm
               onDelete: 'CASCADE',
            }
         ]
      }))
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images');
   }
}
