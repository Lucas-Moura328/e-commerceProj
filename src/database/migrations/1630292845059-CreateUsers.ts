import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1630292845059 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"usuarios",
                columns:[
                    {
                        name: "user_id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "pnome",
                        type: "varchar"
                    },
                    {
                        name: "mnome",
                        type: "varchar"
                    },
                    {
                        name: "unome",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "ddd",
                        type: "int"
                    },
                    {
                        name:"num_phone",
                        type:"varchar"
                    },
                    {
                        name: "genero",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "ativo",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }

}
