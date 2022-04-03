const Sequelize = require('sequelize');

const sequelize = new Sequelize('themovie', 'postgres', 'password', {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433'
});

module.exports = sequelize;