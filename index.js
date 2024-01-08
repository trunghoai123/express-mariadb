const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const UserRoute = require('./routes/UserRoute');

// Import routes
app.use('/users', UserRoute); // Mount the User router under '/users'

console.log('runned');
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
