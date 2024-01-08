require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mariadb', // Change to 'mariadb' if needed for MariaDB
  },
  production: {
    // Production configuration
    // ...
  },
};
