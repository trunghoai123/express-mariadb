// import UserService from '../services/UserService';
const LogService = require('../services/LogService');
const {
  isString,
  isDate,
  isTime,
  isInteger,
} = require('../utilities/validate');

module.exports.getAllLogs = async function (req, res) {
  try {
    const result = await LogService.getAllLogs();
    res.send(result);
    return;
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

module.exports.getLogById = async function (req, res) {
  try {
    const { id } = req.params;
    if (!id || !isInteger(id)) {
      res.status(400).send({ message: 'Please provide a valid id' });
      return;
    }
    const result = await LogService.getLogById(id);
    if (!result) {
      res.status(404).send({ message: 'Log not found' });
      return;
    } else res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

module.exports.addLog = async function (req, res) {
  console.log(req.body);
  // try {
  //   const { temp, distance, date, time } = req.body;
  //   if (!temp && !distance && !date && !time) {
  //     res.status(400).send({ message: 'all values is empty' });
  //     return;
  //   }
  //   if (
  //     !isString(temp) ||
  //     !isString(distance) ||
  //     !isDate(new Date(date)) ||
  //     !isTime(time)
  //   ) {
  //     res.status(400).send({ message: 'Value type is incorrect' });
  //     return;
  //   }
  //   const result = await LogService.addLog({
  //     temp,
  //     distance,
  //     date: new Date(date),
  //     time,
  //   });
  //   res.send(result);
  //   return;
  // } catch (error) {
  //   res.status(500).send({ message: error.message });
  //   return;
  // }
};
