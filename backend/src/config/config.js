require('dotenv').config();
const path = require('path');

module.exports = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    uploadDir: path.join(__dirname, '../../uploads')
};