export interface TiposVendedor {
    name: String;
    birthDate: Date;
    gender: String;
    email: String;
    address: String;
    state: String;
    city: String;
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
}