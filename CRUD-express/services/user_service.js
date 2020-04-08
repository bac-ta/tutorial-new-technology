const connection = require("../helper/connection");

const getUser = (id) => {
    connection.connect();

    connection.query('SELECT * FROM user WHERE id=' + id, (err, rows, fields) => {
        if (err) throw err;
        console.log(rows[0]);

    });

    connection.end();
};

getUser(1);