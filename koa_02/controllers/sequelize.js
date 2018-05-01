
const Sequelize = require('sequelize')

console.log('init sequelize...');

var sequelize = new Sequelize('Sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

var fn_insert = async (ctx, next) => {
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
    let now = Date.now()
    var dog = await Pet.create({
        id: 'd-' + now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog))
    var pets = await Pet.findAll()
    console.log('findAll: ' + JSON.stringify(pets))
}

module.exports = {
    'GET /sequelize': fn_insert
}