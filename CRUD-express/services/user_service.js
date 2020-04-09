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

const UserService = {getUser};
module.exports = UserService;

