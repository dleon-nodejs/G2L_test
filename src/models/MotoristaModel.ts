import * as Sequelize from "sequelize"
import database from "../../database"
import VeiculoModel from './VeiculoModel'

const config = {
    tableName: 'motorista',
    sequelize: database.connection,
  };
class MotoristaModel extends Sequelize.Model {
    public id!: string
    public nome!: string
    public sobrenome!: string
    public cpf!: string
    public ativo!: boolean
    public idveiculos!: string
}

MotoristaModel.init({
    id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4
    },
    nome: Sequelize.DataTypes.STRING,
    sobrenome: Sequelize.DataTypes.STRING,
    cpf: Sequelize.DataTypes.STRING,
    ativo: Sequelize.DataTypes.BOOLEAN,
    idveiculos: Sequelize.DataTypes.STRING
}, config)

VeiculoModel.belongsTo(VeiculoModel, { foreignKey: 'id', targetKey: 'id' });


export default MotoristaModel
