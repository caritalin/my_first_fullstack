const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'cities_password',
    database: 'cities_db'
});

const fetchCities = async() => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM `cities`;')
        console.log(rows);
    } catch (error) {
        console.log(error)
    }
}

fetchCities();