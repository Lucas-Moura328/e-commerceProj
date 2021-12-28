import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { Usuario } from "./Usuario";

@Entity("enderecos")
class Endereco {
    @PrimaryGeneratedColumn()
    end_id: number;

    @Column()
    end_type: string;

    @Column({length: 11})
    residencia_type: string;

    @Column({length: 11})
    log_type: string;

    @Column({length: 100})
    logradouro: string;

    @Column()
    residencia_num: number;

    @Column()
    bairro: string;

    @Column({length: 100})
    complemento: string;

    @Column({length: 30})
    cidade: string;

    @Column({length: 2})
    estado: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    End_user_id: string;

    @ManyToOne(()=> Usuario, usuario => usuario.enderecos)
    usuario: Usuario;
}

export { Endereco };
