'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.Student, {
        as: 'student',
        foreignKey: 'studentId'
      })
      Course.belongsTo(models.Grade, {
        as: 'result',
        foreignKey: 'gradeId'
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      gradeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'grades',
          key: 'id'
        }
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
