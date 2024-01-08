const User = require('../models/User');

module.exports = UserService = {
  async getAllUsers() {
    return await User.findAll();
  },
};
