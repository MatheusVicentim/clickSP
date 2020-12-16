import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createExames1604170973478 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
         name: "exames",
         columns:[
            { 
               name: 'IdExame',
               type: 'integer',
               isPrimary: true,
               generationStrategy: 'increment',
            },
            {
               name: 'NomeExame',
               type: 'varchar',
            },
            {
               name: 'NomeMedicoExame',
               type: 'varchar',
            },
            {
               name: 'InstituicaoExame',
               type: 'varchar',
            },
            {
               name: 'DtaExame',
               type: 'varchar',
            },

            {
               name: 'DescrExame',
               type: 'text',
            },
            {
               name: 'ResultExame',
               type: 'text',
            }
            // {
            //    name: 'ImageExame',
            //    type: 'text',
            // }        
         ]
      }))
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('exames');
   }

}
