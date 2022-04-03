'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('link', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      torrent: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fshare: {
        allowNull: true,
        type: Sequelize.STRING
      },
      google_drive: {
        allowNull: true,
        type: Sequelize.STRING
      },
      one_drive: {
        allowNull: true,
        type: Sequelize.STRING
      },
      movie_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tv_show_id: {
        allowNull: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('link');
  }
};