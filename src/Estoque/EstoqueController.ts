import {Request, Response} from 'express';
import { EstoqueService } from './estoque.service'

class EstoqueController{ 
    async Estoque(req: Request, res: Response){
        const estoque = await new EstoqueService().getStock();

        return res.send(200).json(estoque)
    }

    async EstoqueAleatorio(req: Request, res: Response){
        const estoqueAleatorio = await new EstoqueService().getStockRandom();

        return res.send(200).json(estoqueAleatorio)
    } 

    async ValorTotalEstoque(req: Request, res: Response){
        const estoqueValorTotal = await new EstoqueService().getStockTotalValue()

        return res.send(200).json(estoqueValorTotal)
    }

}

export default new EstoqueController()