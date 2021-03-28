'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // alias keyword 'as' is to help identify the relationship of these associations
      // in this case, it is one-to-one relationship
      Lecturer.hasOne(models.Course, {
        foreignKey: 'lecturer_id',
        as: 'course',
      })
    }
  };
  Lecturer.init({
    lecturer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lecturer',
  });
  return Lecturer;
};