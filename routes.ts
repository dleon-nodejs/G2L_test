import { Router } from 'express'
import Auth from './middleware/authentication'
import motoristaController from './src/controllers/Motorista'
import veiculoController from './src/controllers/Veiculo'

export const router = Router()

/* sem autenticação
// motorista
router.get('/motorista/list', motoristaController.list)
router.get('/motorista/show/:motoristaId', motoristaController.show)
router.post('/motorista/create', motoristaController.create)
router.put('/motorista/update', motoristaController.update)
router.delete('/motorista/delete/:motoristaId', motoristaController.delete)

// veiculo
router.get('/veiculo/models/:store/:country', veiculoController.listVeiculo)
router.get('/veiculo/models/show/:veiculoId', veiculoController.showVeiculo)
router.post('/veiculo/models/create', veiculoController.createVeiculo)
router.put('/veiculo/models/update', veiculoController.updateVeiculo)
router.delete('/veiculo/models/delete/:veiculoId', veiculoController.deleteVeiculo)
*/


// motorista  Com autenticação
router.get('/motorista/list', Auth, motoristaController.list)
router.get('/motorista/show/:motoristaId', Auth, motoristaController.show)
router.post('/motorista/create', Auth, motoristaController.create)
router.put('/motorista/update', Auth, motoristaController.update)
router.delete('/motorista/delete/:motoristaId', Auth, motoristaController.delete)

// veiculo Com autenticação
router.get('/veiculo/models/:store/:country', Auth, veiculoController.listVeiculo)
router.get('/veiculo/models/show/:veiculoId', Auth, veiculoController.showVeiculo)
router.post('/veiculo/models/create', Auth, veiculoController.createVeiculo)
router.put('/veiculo/models/update', Auth, veiculoController.updateVeiculo)
router.delete('/veiculo/models/delete/:veiculoId', Auth, veiculoController.deleteVeiculo)
