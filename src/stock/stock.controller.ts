import {Request, Response} from 'express'
import { StockService } from './stock.service'

class StockController {
    async stock(req: Request, res: Response) {
        const stock = await new StockService().getStock()

        return res.status(200).json(stock)
    }
    async getStockRandom(req: Request, res: Response) {
        const stock = await new StockService().getStockRandom()

        return res.status(200).json(stock)
    }
    async getStockTotalValue(req: Request, res: Response) {
        const stock = await new StockService().getStockTotalValue()

        return res.status(200).json(stock)
    }
}

export default new StockController()