
const sequelize = require('../db-init')
const Sequelize = require('sequelize')
const User = require('./Users')

var Pet = sequelize.define('pet', {
  id: {
      type: Sequelize.STRING(50),
      primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
      timestamps: false
})

Pet.belongsTo(User)

module.exports = Pet