import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './users/user.controller'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'
import usuarioController from './Usuario/UsuarioController'
import estoqueController from './Estoque/EstoqueController'
import produtosController from './Produtos/ProdutosController'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)
routes.post('/products', productController.create)
routes.get('/products/list', productController.list)
routes.get('/products/writefile', productController.writeFile)
routes.get('/products/readfile', productController.readFile)
routes.get('/products/stock', stockController.stock)
routes.get('/products/stock/random', stockController.getStockRandom)
routes.get('/products/stock/total', stockController.getStockTotalValue)

//Feito prara estudar para prova
routes.post('/usuario', usuarioController.CriarUsuario)
routes.get('/usuario', usuarioController.ListarUsuarios)
routes.get('/usuario/:id', usuarioController.AcharUsuario)
routes.put('/usuario/:id', usuarioController.AtualizarUsuario)
routes.delete('/usuario/:id', usuarioController.DeletarUsuaio)
routes.get('/produtos/estoque', estoqueController.Estoque)
routes.get('/produtos/estoque/aleatorio', estoqueController.EstoqueAleatorio)
routes.get('/produtos/estoque/total', estoqueController.ValorTotalEstoque)
routes.post('/produtos', produtosController.CriarProduto)
routes.get('/produtos/lista', produtosController.ListarProduto)
routes.get('/produtos/escreveArquivo', produtosController.EscreveArquivoProduto)
routes.get('/produtos/leArquivo', produtosController.LerArquivoProduto)
routes.get('/produtos/:id', produtosController.AtualizarProduto)
routes.get('/produtos/:id', produtosController.DeletarProduto)
routes.get('/produtos/:id', produtosController.AcharProduto)


// 17 - Estamos exportando a constante routes
export default routes