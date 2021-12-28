import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersAddresses1630386423921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "enderecos",
                columns:[
                    {
                        name: "end_id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "end_type",
                        type: "varchar"
                    },
                    {
                        name: "residencia_type",
                        type: "varchar"
                    },
                    {
                        name: "log_type",
                        type: "varchar"
                    },
                    {
                        name: "logradouro",
                        type: "varchar"
                    },
                    {
                        name: "residencia_num",
                        type: "int"
                    },
                    {
                        name: "bairro",
                        type: "varchar"
                    },
                    {
                        name: "complemento",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "cidade",
                        type: "varchar"
                    },
                    {
                        name: "estado",
                        type: "varchar"
                    },
                    {
                        name: "End_user_id",
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

                ],
                foreignKeys: [
                    {
                        name: "FKEndUserId",
                        referencedTableName: "usuarios",
                        referencedColumnNames: ["user_id"],
                        columnNames: ["End_user_id"],
                        onDelete: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("enderecos");
    }

}
