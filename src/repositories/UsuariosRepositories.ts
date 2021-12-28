import {EntityRepository, Repository} from "typeorm";
import { Usuario } from "../entities/Usuario";


@EntityRepository(Usuario)
class UsuariosRepositories extends Repository<Usuario> {}

export {UsuariosRepositories};