require('dotenv').config(); // Load environment variables from .env file
const Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../database/config.json')[env];

if (process.env.IS_USE_ENV === 'true') {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// const sequelize = new Sequelize(
//   process.env.DB_DATABASE,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mariadb',
//   }
// );

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testDatabaseConnection();

module.exports = sequelize;
