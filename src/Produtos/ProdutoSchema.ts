import { model, Schema } from "mongoose";

const ProdutosSchema = new Schema({
    nome: {
        required: true,
        type: String,
    },
    preco:{
        required: true,
        type: Number,
    },
    quantidade:{
        required: true,
        type: Number,
    },
}, {
    timestamps: true
})

export default model('Produto', ProdutosSchema)