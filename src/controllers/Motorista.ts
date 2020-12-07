import motoristaModel from '../models/MotoristaModel';

class MotoristaController {
  async create(req, res) {
    const motorista = await motoristaModel.create(req.body);
    return res.status(200).json(motorista);
  }

  async update(req, res) {
    const { motoristaId: id } = req.body;

    const motorista = await motoristaModel.findByPk(id);

    if (!motorista) {
      return res.status(404).json({ error: 'motorista not found'});
    }

    const update = await motorista.update(req.body);

    return res.status(200).json(update);
  }

  async list(req, res) {
    const motorista = await motoristaModel.findAll();
    return res.status(200).json(motorista);
  }

  async show(req, res) {
    const { motoristaId: id } = req.params;
    const motorista = await motoristaModel.findByPk(id);

    return res.status(200).json(motorista);
  }

  async delete(req, res) {
    const { motoristaId: id } = req.params;
    const motorista = await motoristaModel.destroy({ where: {id} });
    return res.status(204).json(motorista);
  }


}

export default new MotoristaController();
