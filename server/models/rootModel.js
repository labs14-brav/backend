const db = require('../../data/dbConfig');
const userModel = require('./userModel');

module.exports = {
    getUsers,
    getUserByEmail,
    getUserById,
    addUser,
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