import { model, Schema } from 'mongoose'

const VendedorSchema = new Schema({
    name: String,
    birthDate: Date,
    gender: String,
    email: String,
    address: String,
    state: String,
    city: String,
    Cliente:{
        nomeCliente: String,
        Produto:{
            nomeProduto: String,
            preco: Number,
            Estoque:{
                qntd: Number
            }
        }
    }
});

export default model('Vendedor', VendedorSchema)