import {Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import {v4 as uuid} from "uuid"
import { Endereco } from "./Endereco";

@Entity("usuarios")
class Usuario {
    @PrimaryColumn()
    readonly user_id: string;

    @Column({length: 30})
    pnome: string;

    @Column({length: 30})
    mnome: string;

    @Column({length: 30})
    unome: string;

    @Column({length: 50})
    email: string;
    
    @Column({length: 11})
    cpf: string;

    @Column()
    ddd: number;

    @Column({length: 9})
    num_phone: string;

    @Column()
    genero: string;

    @Column()
    admin: boolean;

    @Column()
    ativo: boolean;

    @Column()
    password: string;

    @OneToMany(() => Endereco, endereco => endereco.usuario)
    enderecos: Endereco[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.user_id) {
            this.user_id = uuid();
        }
    }
}

export { Usuario };
