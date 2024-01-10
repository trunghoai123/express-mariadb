require('dotenv').config(); // Require the dotenv package
const express = require('express');
const app = express();
const IndexRoute = require('./routes/IndexRoute');
const LogRoute = require('./routes/LogRoute');
const bodyParser = require('body-parser');
// const bodyParser = require('body-parser');

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept',
//     'application/json',
//     'multipart/form-data'
//   );
//   next();
// });
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', IndexRoute);
app.use('/logs', LogRoute);
// app.use('/logs/log/add-new', (req, res) => {
//   console.log(req.body);
//   res.send('Form data received successfully!');
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
