'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.User)
    }
  }
  Photo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title cannot be empty"
        },
        notEmpty:{
          msg: "Title cannot contain empty characters"
        }, 
      }
    }, 
    caption: DataTypes.STRING,
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image URL cannot be empty"
        },
        notEmpty:{
          msg: "Image URL cannot contain empty characters"
        }, 
        isUrl:{
          msg: "Wrong URL format"
        }
      }
    }, 
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "user ID cannot be empty"
        },
        notEmpty:{
          msg: "User ID cannot contain empty characters"
        }
      }
    }, 
  }, {
    hooks: {
      beforeCreate(instance){
        instance.caption = `${instance.title.toUpperCase()} ${instance.image_url}`;
      }
    },
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};