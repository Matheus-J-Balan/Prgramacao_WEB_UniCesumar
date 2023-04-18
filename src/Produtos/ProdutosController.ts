import { Request, Response } from 'express';
import { ProdutoService } from './produtos.service';

class ProdutoController{

    async CriarProduto(req: Request, res: Response){
        const criarProduto = await new ProdutoService().create(req.body)
        
        return res.send(200).json(criarProduto)
    }

    async ListarProduto(req: Request, res: Response){
        const listarProduto = await new ProdutoService().list()

        return res.send(200).json(listarProduto)
    }

    async AcharProduto(req: Request, res: Response){
        const acharProduto = await new ProdutoService().find(req.params.id)

        return res.send(200).json(acharProduto)
    }

    async AtualizarProduto(req: Request, res: Response){
        const atualizarProduto = await new ProdutoService().update(req.params.id, req.body)

        return res.send(200).json(atualizarProduto)
    }

    async DeletarProduto(req: Request, res: Response){
        await new ProdutoService().delete(req.params.id)

        return res.send(200).json("Produto deletado com sucesso!!!")
    }

    async EscreveArquivoProduto(req: Request, res: Response){
        const escreveArquivoProduto = await new ProdutoService().ProdutoWriteFile()

        return res.send(200).json(escreveArquivoProduto)
    }

    async LerArquivoProduto(req: Request, res: Response){
        const lerArquivoProduto = await new ProdutoService().ProdutoReadFile()

        return res.send(200).json(lerArquivoProduto)
    }
}

export default new ProdutoController()