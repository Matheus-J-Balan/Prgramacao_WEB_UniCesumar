import {Request, Response} from 'express'
import { ProductService } from './product.service'

class ProductController {

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const product = await new ProductService().listProducts()

        return res.status(200).json(product)
    }

    async writeFile(req: Request, res: Response) {
        const product = await new ProductService().productsWriteFile()

        return res.status(200).json(product)
    }

    async readFile(req: Request, res: Response) {
        const product = await new ProductService().productsReadFile()

        return res.status(200).json(product)
    }

    // async find(req: Request, res: Response) {
    //     const user = await new ProductService().find(req.params.id)

    //     return res.status(200).json(user)
    // }

    // async update(req: Request, res: Response) {
    //     const user = await new ProductService().update(req.params.id, req.body)

    //     return res.status(200).json(user)
    // }

    // async delete(req: Request, res: Response) {
    //     await new ProductService().delete(req.params.id)

    //     return res.status(200).json("Successfully deleted user!")
    // }

    
}

export default new ProductController()