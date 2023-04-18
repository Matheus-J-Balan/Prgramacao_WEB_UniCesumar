import { TiposEstoque } from "./tipos/estoque.types";
import  EstoqueModels  from './EstoqueSchema';
import ProductModels from '../products/product.schema'

export class EstoqueService{
    async getStock(){
        const listaProdutos = await ProductModels.find()

        const produtosEstoque = listaProdutos.map(item => {
            let estoque = {
                nome: item.name,
                preco: item.price,
                quantidade: item.quantity,
                valorEstoque: (item.quantity && item.price) ? item.quantity * item.price : 0
            }
            return estoque
        })

        const criarEstoque = await EstoqueModels.create(produtosEstoque)

        return criarEstoque
    }

    async getStockTotalValue(){
        const listaProdutos = await EstoqueModels.find()

        var soma = listaProdutos.reduce((anterior, atual) => {
            return anterior + atual.valorEstoque
        }, 0)

        return{
            valorTotalEstoque: soma
        }
    }
}