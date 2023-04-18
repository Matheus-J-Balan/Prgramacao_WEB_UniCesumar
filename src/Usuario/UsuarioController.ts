import { Request, Response } from 'express';
import { UserService } from "../users/user.service";

class UsuarioController 
{
    async CriarUsuario(req: Request, res: Response){
        const criar = await new UserService().create(req.body);
        
        return res.send(200).json(criar)
    }    

    async AcharUsuario(req: Request, res: Response) {
        const achar = await new UserService().find(req.params.id)

        return res.send(200).json(achar)
    }

    async ListarUsuarios(req: Request, res: Response){
        const listar = await new UserService().list()

        return res.send(200).json(listar)
    }

    async AtualizarUsuario(req: Request, res:Response){
        const atualizar = await new UserService().update(req.params.id, req.body)

        return res.send(200).json(atualizar)
    }

    async DeletarUsuaio(req: Request, res: Response){
        await new UserService().delete(req.body)
        
        return res.send(200).json("Usuario deletado com Sucesso!!!")
    }
}

export default new UsuarioController()