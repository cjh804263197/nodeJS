
const sequelize = require('../db-init')
const Sequelize = require('sequelize')
const Pet = require('./Pet')

var User = sequelize.define('user', {
  id: {
      type: Sequelize.STRING(50),
      primaryKey: true
  },
  account: Sequelize.STRING(50),
  password: Sequelize.STRING(20)
}, {
      timestamps: false
})

User.hasOne(Pet)

module.exports = User