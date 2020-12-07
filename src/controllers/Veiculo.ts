import veiculoModel from '../models/VeiculoModel'

class VeiculoController {
  // Veiculo
  async createVeiculo (req, res) {
    const VeicModel = await veiculoModel.create(req.body)
    return res.status(200).json(VeicModel)
  }

  async updateVeiculo (req, res) {
    const { veiculoId: id } = req.body

    const VeicModel = await veiculoModel.findByPk(id)

    if (!VeicModel) {
      return res.status(404).json({ error: 'Veiculo not found' })
    }

    const update = await VeicModel.update(req.body)

    return res.status(200).json(update)
  }

  async listVeiculo (req, res) {
    const VeicModel = await veiculoModel.findAll()

    const customResponse = []
    VeicModel.map((veiculo) => {
      customResponse.push({
        name: veiculo.nameproprietario,
        placa: veiculo.placa,
        renavam: veiculo.renavam,
        id: veiculo.id
      })
    })

    return res.status(200).json(customResponse)
  }

  async showVeiculo (req, res) {
    const { veiculoId: id } = req.params
    const VeicModel = await veiculoModel.findByPk(id)

    return res.status(200).json(VeicModel)
  }

  async deleteVeiculo (req, res) {
    const { veiculoId: id } = req.params
    const VeicModel = await veiculoModel.destroy({ where: { id } })
    return res.status(204).json(VeicModel)
  }

}

export default new VeiculoController()
