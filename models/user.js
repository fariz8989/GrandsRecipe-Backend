'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const post = require('./post');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post,{
        foreignKey:'userId',
        sourceKey:"id",
        as:"post"
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};