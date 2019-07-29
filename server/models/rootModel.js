const db = require('../../data/dbConfig');

module.exports = {
    getUsers,
    getUserByEmail,
    getUserById,
    addUser,
    editUser,
    addMediator
}

//Test method for accessing data on the FE
function getUsers(offset=0) {
    return db('users')
    .limit(10)
    .offset(offset)
};

function getUserByEmail(email) {
    return db('users').where('email',email).first()
};

function getUserById(id) {
    return db('users').where('id',id).first()
};

async function addUser(user) {
    if(process.env.NODE_ENV=="production"){
        const [ids] = await db('users').insert({
            email: user.email,
            uid: user.uid,
        },['id'])
        return ids.id
    }else{
        const [id] = await db('users').insert({
            email: user.email,
            uid: user.uid,
        })
        return id
    }

};

async function editUser(id, update) {
    return db('users')
      .where('id', id)
      .update(update);
  }

async function addMediator(mediator_cases) {
    if(process.env.NODE_ENV=="production"){
        [ids] = await db('mediator_cases').insert({
            mediator_id: mediator_cases.mediator_id,
            case_id: mediator_cases.case_id
        },['id'])
        return ids.id
    } else {
        const [id] = await db('mediator_cases').insert({
            mediator_id: mediator_cases.mediator_id,
            case_id: mediator_cases.case_id
        })
        return id
    }
}