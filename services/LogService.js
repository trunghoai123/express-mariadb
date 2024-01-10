const LogRepo = require('../repositories/LogRepository');

module.exports = LogService = {
  async getAllLogs() {
    return await LogRepo.getAllLogs();
  },
  async getLogById(id) {
    return await LogRepo.findById(id);
  },
  async addLog(log) {
    return await LogRepo.addLog(log);
  },
};
