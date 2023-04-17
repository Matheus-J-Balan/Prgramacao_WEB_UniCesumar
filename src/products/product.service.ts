import { ProductType } from "./types/product.types";
import ProductModel from "./product.schema";
import { writeFile, readFile } from 'fs/promises'

export class ProductService {
    
    async create(data: ProductType) {
        const t = await ProductModel.create(data)
        
        return t
    }

    async listProducts() {
        const productList = await ProductModel.find()

        return productList
    }

    async productsWriteFile() {
        const list = await this.listProducts()
        writeFile('allProducts.json', JSON.stringify(list, null, 2))
        .then(() => { return { success: true }})
        .catch(() => {return { success: false }})
    }
    
    async productsReadFile() {
        var a = []
        const t = readFile('allProducts.json', 'utf8').then(x => {
            a = JSON.parse(x)
        })
        console.log(a)
        return a
    }
    
}