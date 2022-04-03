'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      original_title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      overview: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      vote_average: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      poster: {
        allowNull: true,
        type: Sequelize.STRING
      },
      back_drop: {
        allowNull: true,
        type: Sequelize.STRING
      },
      key_words: {
        allowNull: true,
        type: Sequelize.STRING
      },
      release_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movie');
  }
};