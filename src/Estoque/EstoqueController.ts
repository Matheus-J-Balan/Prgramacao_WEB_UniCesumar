import {Request, Response} from 'express';
import { EstoqueService } from './estoque.service'

class EstoqueController{ 
    async Estoque(req: Request, res: Response){
        const estoque = await new EstoqueService().getStock();

        return res.send(200).json(estoque)
    }

    async ValorTotalEstoque(req: Request, res: Response){
        const estoqueValorTotal = await new EstoqueService().getStockTotalValue()

        return res.send(200).json(estoqueValorTotal)
    }

}

export default new EstoqueController()