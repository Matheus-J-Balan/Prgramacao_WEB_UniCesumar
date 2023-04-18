import { model, Schema } from 'mongoose'

const UsuarioSchema = new Schema({
    primeiroNome: {
        required: true,
        type: String,
    },

    ultimoNome: {
        required: true,
        type: String,
    },

    email: {
        required: true,
        type: String,
    },

    idade: {
        required: true,
        type: Number,
    }
}, {
    timestamps: true
})

export default model('Usuario', UsuarioSchema)