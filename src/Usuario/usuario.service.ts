import { TiposUsuario } from "./Tipos/TiposUsuario";
import  UsuarioModels  from "./UsuarioSchema";

export class UsuarioService{
    
    async create(Usuario: TiposUsuario){
        const usuarioCriado = await UsuarioModels.create(Usuario)

        return usuarioCriado
    }

    async find(id){
        const usuarioAchado = await UsuarioModels.find(id);

        return usuarioAchado
    }
    
    async list(){
        const usuariosListados = await UsuarioModels.find();

        return usuariosListados
    }

    async update(id, atualizaUsuario: TiposUsuario){
        const attUsuario = await UsuarioModels.findOneAndUpdate({ _id : id}, {
                primeiroNome: atualizaUsuario.primeiroNome,
                ultimoNome: atualizaUsuario.ultimoNome,
                email: atualizaUsuario.email,
                idade: atualizaUsuario.idade,
        },{new: true})
        
        return attUsuario
    }

    async delete(id){
        await UsuarioModels.findOneAndDelete({_id: id})

        return 
    }
}