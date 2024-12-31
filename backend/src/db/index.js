const { Pool } = require('pg');
const { databaseUrl } = require('../config/config');

const pool = new Pool({
    connectionString: databaseUrl
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};