import { TiposVendedor } from "./Tipos/TiposVendedor";
import  VendedorModels  from "./VendedorSchema";

export class VendedorService{
    
    async create(Vendedor: TiposVendedor){
        const vendedorCriado = await VendedorModels.create(Vendedor)

        return vendedorCriado
    }

    async find(id){
        const vendedorAchado = await VendedorModels.find(id);

        return vendedorAchado
    }
    
    async findByEmail(email){
        const vendedorEmail = await VendedorModels.find(email);

        return vendedorEmail
    }

    async getRandom(){
        const listaVendedores = await VendedorModels.find().limit(10)

        var quatroAleatorios

        for (let i = 0; i < 4; i++){
            var indice = Math.floor(Math.random() * listaVendedores.length)
            quatroAleatorios.push(listaVendedores[indice])
        }

        return quatroAleatorios
    }
    
    async list(){
        const vendedoresListados = await VendedorModels.find();

        return vendedoresListados
    }


    async update(id, atualizaVendedor: TiposVendedor){
        const attUsuario = await VendedorModels.findOneAndUpdate({ _id : id}, {
            name: atualizaVendedor.name,
            birthDate: atualizaVendedor.birthDate,
            gender: atualizaVendedor.gender,
            email: atualizaVendedor.email,
            address: atualizaVendedor.address,
            state: atualizaVendedor.state,
            city: atualizaVendedor.city,
        },{new: true})
        
        return attUsuario
    }

    async delete(id){
        await VendedorModels.findOneAndDelete({_id: id})

        return 
    }
}