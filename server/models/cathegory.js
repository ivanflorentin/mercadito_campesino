'use strict'

module.exports = (sequelize, DataTypes) =>{
  return sequelize.define('cathegory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      validate: {
	notEmpty: true
      }
    }
  },{
    timestamps: true,
    paranoid: true
  } 
  )
}
