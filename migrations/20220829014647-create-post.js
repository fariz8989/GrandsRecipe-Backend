'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      author: {
        type: Sequelize.STRING,
        allowNull:false
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      image_url: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.INTEGER
      },
      portion: {
        type: Sequelize.INTEGER
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      steps: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};