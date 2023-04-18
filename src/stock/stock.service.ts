import { StockType } from "./types/stock.types";
import StockModel from './stock.schema';
import ProductModel from '../products/product.schema'

export class StockService {
    async getStock() {
        const productList = await ProductModel.find()

        const stockProducts = productList.map(item => {
            let stock = {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                stockValue: (item.quantity && item.price) ? item.quantity * item.price : 0,
            }
            return stock
        })
        const stockList = await StockModel.create(stockProducts)
        return stockList
    }

    async getStockTotalValue() {
        const productList = await StockModel.find()

        var soma = productList.reduce((prev, curr) => {
            return prev + curr.stockValue
        }, 0)

        return {
            totalStockPrice: soma
        }
    }
}