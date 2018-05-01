const Sequelize = require('sequelize')

var sequelize = new Sequelize('Sequelize', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
})
console.log('init sequelize...');

module.exports = sequelize