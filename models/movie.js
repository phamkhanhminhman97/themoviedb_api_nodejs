'use strict';
const { STRING } = require('mysql/lib/protocol/constants/types');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    original_title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    vote_average: DataTypes.NUMBER,
    poster: DataTypes.STRING,
    back_drop: DataTypes.STRING,
    key_words: DataTypes.STRING,
    release_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};