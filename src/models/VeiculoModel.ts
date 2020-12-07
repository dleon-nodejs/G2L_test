import * as Sequelize from "sequelize"
import database from "../../database"
import MotoristaModel from "./MotoristaModel"

const config = {
    tableName: 'veiculo',
    sequelize: database.connection,
  };

class VeiculoModel extends Sequelize.Model {
    public id: string
    public nameproprietario: string
    public placa:string
    public renavam: string
}

VeiculoModel.init({
    id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4
    },
    nameproprietario:Sequelize.DataTypes.STRING,
    placa: Sequelize.DataTypes.STRING,
    renavam:Sequelize.DataTypes.STRING
}, config)

export default VeiculoModel
