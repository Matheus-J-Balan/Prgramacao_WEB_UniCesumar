import { TiposProdutos } from "./Tipos/produtos.types";
import ProdutoModel from "./ProdutoSchema";
import { writeFile,readFile } from "fs/promises";

export class ProdutoService{

    async create(data: TiposProdutos){
        const criarProduto = await ProdutoModel.create(data)

        return criarProduto
    }

    async list(){
        const listarProdutos = await ProdutoModel.find()

        return listarProdutos
    }

    async find(id){
        const acharProduto = await ProdutoModel.find(id)

        return acharProduto
    }

    async update(id, dataToUpdate: TiposProdutos){
        const atualizarProduto = await ProdutoModel.findOneAndUpdate({_id: id},{
            nome: dataToUpdate.nome,
            preco: dataToUpdate.preco,
            quantidade: dataToUpdate.quantidade,
        }, {new: true})

        return atualizarProduto
    }

    async delete(id){
        await ProdutoModel.findOneAndDelete({_id: id})

        return
    }

    async ProdutoWriteFile(){
        const lista = await this.list
        writeFile('allProducts.json', JSON.stringify(lista, null, 2))
        .then(() => {return {success: true}})
        .catch(() => {return {success: false}})
    }

    async ProdutoReadFile(){
        var dados = []
        const t = readFile('allProducts.json', 'utf8').then(x => {
            dados = JSON.parse(x)
        })
        console.log(dados)
        return dados
    }
}