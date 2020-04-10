const pool = require('../helper/connection');
const lodash = require('lodash');

const getUser = async (id) => {
    const rows = await pool.query('SELECT id, name, email, address, role FROM user WHERE id=?', id);
    if (lodash.isEmpty(rows))
        return {
            user: {}
        };
    return {
        user: {
            id: rows[0].id,
            name: rows[0].name,
            email: rows[0].email,
            address: rows[0].address
        }
    }
};
const createUser = async (user) => {
    const name = user.name;
    const address = user.address;
    const email = user.email;
    const password = user.password;

    await pool.query('INSERT INTO user(name, address, email, password) VALUES (?,?,?,?)', [name, address, email, password]);

};

const UserService = {getUser, createUser};
module.exports = UserService;

