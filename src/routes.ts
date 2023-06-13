import { Router } from 'express'
import vendedoresController from './Vendedor/VendedorController'

const routes = Router()

routes.get('/aleatorio', vendedoresController.VendedoresAleatorio)
routes.get('/lista', vendedoresController.CriarVendedor)
routes.put('/:id', vendedoresController.AtualizarVendedor)
routes.delete('/Deletar/:id', vendedoresController.DeletarVendedor)
routes.get('/:id', vendedoresController.AcharVendedor)
routes.get('/listar', vendedoresController.ListarVendedor)
routes.get('/Achar/email', vendedoresController.VendedorEmail)


export default routes;