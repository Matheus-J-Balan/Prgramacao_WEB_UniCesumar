import { ProductType } from "./types/product.types";
import ProductModel from "./product.schema";
import { writeFile, readFile } from 'fs/promises'

export class ProductService {
    
    async create(data: ProductType) {
        const product = await ProductModel.create(data)
        
        return product
    }

    async listProducts() {
        const productList = await ProductModel.find()

        return productList
    }

    async find(id) {
        const productFind = await ProductModel.find(id) 

        return productFind
    }

    async update (id, dataToUpdate: ProductType){
        const updatedProduct = await ProductModel.findOneAndUpdate({_id: id}, {
                name: dataToUpdate.name,
                price: dataToUpdate.price,
                quantity: dataToUpdate.quantity, 
        }, {new: true})

        return updatedProduct
    }

    async delete(id){
        await ProductModel.findOneAndDelete({_id: id})
        return
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