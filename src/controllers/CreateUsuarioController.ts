import { Request, Response} from "express";
import { CreateUsuarioService } from "../services/CreateUsuarioService";


class CreateUsuarioController {
    async handle(request: Request, response: Response) {
        const {pnome, mnome, unome, email, cpf, ddd, num_phone, genero,admin, ativo, password } = request.body;

        const createUsuarioService = new CreateUsuarioService();
        const usuario = await createUsuarioService.execute({pnome, mnome, unome, email, cpf, ddd, num_phone, genero,admin, ativo, password});

        return response.json(usuario);
    }
}

export {CreateUsuarioController}