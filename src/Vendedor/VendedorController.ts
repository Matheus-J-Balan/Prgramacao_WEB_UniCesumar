import { Request, Response } from 'express';
import { VendedorService } from './vendedor.service';

class VendedorController{

    async CriarVendedor(req: Request, res: Response){
        const criarVendedor = await new VendedorService().create(req.body)
        
        return res.send(200).json(criarVendedor)
    }

    async ListarVendedor(req: Request, res: Response){
        const listarVendedor = await new VendedorService().list()

        return res.send(200).json(listarVendedor)
    }

    async AcharVendedor(req: Request, res: Response){
        const acharVendedor = await new VendedorService().find(req.params.id)

        return res.send(200).json(acharVendedor)
    }

    async AtualizarVendedor(req: Request, res: Response){
        const atualizarVendedor = await new VendedorService().update(req.params.id, req.body)

        return res.send(200).json(atualizarVendedor)
    }

    async DeletarVendedor(req: Request, res: Response){
        await new VendedorService().delete(req.params.id)

        return res.send(200).json("Vendedor deletado com sucesso!!!")
    }
   
    async VendedoresAleatorio(req: Request, res: Response){
        const vendedorAleatorio = await new VendedorService().getRandom();

        return res.send(200).json(vendedorAleatorio)
    } 

    async VendedorEmail(req: Request, res: Response){
        const { gender, state, emailHost } = req.query;

        const query: any = {};
    
        if (gender) {
          query.gender = gender;
        }
    
        if (state) {
          query.state = state;
        }
    
        if (emailHost) {
          query.email = { $regex: `${emailHost}$`, $options: "i" };
        }

        const findedCustomer = await new VendedorService().findByEmail(query);

        return res.send(200).json(findedCustomer)
    }

}

export default new VendedorController()