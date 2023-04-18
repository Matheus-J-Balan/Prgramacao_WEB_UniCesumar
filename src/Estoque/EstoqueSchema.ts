import { model, Schema } from 'mongoose'

const EstoqueSchema = new Schema({
    nome: {
        required: true,
        type: String,
    },
    preco: {
        required: true,
        type: Number,
    },
    quantidade: {
        required: true,
        type: Number,
    },
    valorEstoque: {
        required: true,
        type: Number,
    }
}, {
    timestamps: true
})

export default model('EstoqueProduto', EstoqueSchema)