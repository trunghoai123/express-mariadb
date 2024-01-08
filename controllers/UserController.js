// import UserService from '../services/UserService';
const UserService = require('../services/UserService');

module.exports.getAllUsers = async function (req, res) {
  console.log('runned controller');
  UserService.getAllUsers().then((result) => {
    res.send(result);
    console.log(result);
  });
};
