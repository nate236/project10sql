require('dotenv').config();
const { Pool } = require('pg');

// Create a connection pool using environment variables
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

// Test the connection
pool.connect()
    .then(() => console.log('✅ PostgreSQL Connected!'))
    .catch(err => console.error('❌ Connection Error:', err.stack));

module.exports = pool;


