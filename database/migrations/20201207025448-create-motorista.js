module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("motorista", {
      id: {
          type: Sequelize.DataTypes.UUID,
          primaryKey: true,
          defaultValue: Sequelize.DataTypes.UUIDV4
      },
      nome: {
        type: Sequelize.DataTypes.STRING
      },
      sobrenome: {
        type: Sequelize.DataTypes.STRING
      },
      cpf: {
        type: Sequelize.DataTypes.STRING
      },
      ativo: {
        type: Sequelize.DataTypes.BOOLEAN
      },
      idveiculos: {
        type: Sequelize.DataTypes.JSON
      },
      dtnasc: {
        type: Sequelize.DataTypes.DATE
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("motorista")
  }
}
