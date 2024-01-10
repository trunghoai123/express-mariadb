const Log = require('../models/Log');

module.exports = LogService = {
  async getAllLogs() {
    return await Log.findAll();
  },
  async findById(id) {
    return await Log.findByPk(id);
  },
  async addLog(log) {
    return await Log.create(log);
  },
};
