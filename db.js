const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Limit the number of simultaneous connections
  host: 'your_host', // Replace with your MariaDB host
  user: 'your_username', // Replace with your MariaDB username
  password: 'your_password', // Replace with your MariaDB password
  database: 'your_database', // Replace with your MariaDB database name
});

// Check if the connection is successful
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MariaDB!');
    connection.release(); // Release the connection
  }
});

module.exports = pool;
