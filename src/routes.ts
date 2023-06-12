import { Router } from 'express'
import usuarioController from './Usuario/UsuarioController'
import estoqueController from './Estoque/EstoqueController'
import produtosController from './Produtos/ProdutosController'

const routes = Router()

routes.post('/usuario', usuarioController.CriarUsuario)
routes.get('/usuario', usuarioController.ListarUsuarios)
routes.get('/usuario/:id', usuarioController.AcharUsuario)
routes.put('/usuario/:id', usuarioController.AtualizarUsuario)
routes.delete('/usuario/:id', usuarioController.DeletarUsuaio)
routes.get('/produtos/estoque', estoqueController.Estoque)
routes.get('/produtos/estoque/total', estoqueController.ValorTotalEstoque)
routes.get('/produtos/aleatorio', produtosController.ProdutosAleatorio)
routes.post('/produtos', produtosController.CriarProduto)
routes.get('/produtos/lista', produtosController.ListarProduto)
routes.get('/produtos/escreveArquivo', produtosController.EscreveArquivoProduto)
routes.get('/produtos/leArquivo', produtosController.LerArquivoProduto)
routes.put('/produtos/:id', produtosController.AtualizarProduto)
routes.delete('/produtos/:id', produtosController.DeletarProduto)
routes.get('/produtos/:id', produtosController.AcharProduto)


export default routes