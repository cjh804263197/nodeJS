
const Pet = require('../models/Pet')

const User = require('../models/Users')

const uuid = require('node-uuid')

var fn_create_pet_user = async (ctx, next) => {
    let now = Date.now()
    var dog = await Pet.create({
        id: uuid.v4(),
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    var user = dog.createUser({
        id: uuid.v4(),
        account: 'chen',
        password: '123456'
    })
    ctx.response.body = user.get({'plain': true})
}

module.exports = {
    'GET /createPetUser': fn_create_pet_user
}