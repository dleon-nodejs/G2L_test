module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("veiculo", {
      id: {
          type: Sequelize.DataTypes.UUID,
          primaryKey: true,
          defaultValue: Sequelize.DataTypes.UUIDV4
      },
      nameproprietario: {
        type: Sequelize.DataTypes.STRING
      },
      sobrenome: {
        type: Sequelize.DataTypes.STRING
      },
      placa: {
        type: Sequelize.DataTypes.STRING
      },
      renavam: {
        type: Sequelize.DataTypes.STRING
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
    await queryInterface.dropTable("veiculo")
  }
}
