import { model, Schema } from 'mongoose'

const VendedorSchema = new Schema({
    name: String,
    birthDate: Date,
    gender: String,
    email: String,
    address: String,
    state: String,
    city: String,
});

export default model('Vendedor', VendedorSchema)