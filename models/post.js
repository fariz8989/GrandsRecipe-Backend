'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    image_url: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    portion: DataTypes.INTEGER,
    ingredients: DataTypes.ARRAY(DataTypes.STRING),
    steps: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};