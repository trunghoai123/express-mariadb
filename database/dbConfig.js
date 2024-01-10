require("dotenv").config(); // Load environment variables from .env file
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mariadb", // Change this to your database dialect (e.g., 'mysql', 'postgres', 'sqlite', etc.)
    // Additional options (if needed)
  }
);

// Test the connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testDatabaseConnection(); // Test the connection on file load

module.exports = sequelize; // Export the Sequelize instance to be used in models
