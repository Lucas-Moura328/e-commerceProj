import { getCustomRepository } from "typeorm";
import { UsuariosRepositories } from "../repositories/UsuariosRepositories";
import { hash } from "bcryptjs";

interface IUsuarioRequest {
    pnome: string;
    mnome: string;
    unome: string;
    email: string;
    cpf: string;
    ddd: number;
    num_phone: string;
    genero: string;
    admin?: boolean;
    ativo?: boolean;
    password: string;
}

class CreateUsuarioService {
    async execute({pnome, mnome, unome, email, cpf, ddd, num_phone, genero, admin = false, ativo = true, password}: IUsuarioRequest) {
        const usuarioRepository = getCustomRepository(UsuariosRepositories);

        if(!email) {
            throw new Error("Email incorreto");
        }

        const usuarioExiste = await usuarioRepository.findOne({select: [ "email", "cpf" ]});

        if(usuarioExiste) {
            throw new Error("Usuário já existe");
        }

        const passwordHash = await hash(password, 8)

        const usuario = usuarioRepository.create({
            pnome,
            mnome,
            unome,
            email,
            cpf,
            ddd,
            num_phone,
            genero,
            admin,
            ativo,
            password: passwordHash,
        });

        await usuarioRepository.save(usuario);

        return usuario;
    }
}

export {CreateUsuarioService};