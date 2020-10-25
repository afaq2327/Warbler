const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const databaseUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1/warbler';

mongoose
  .connect(databaseUri)
  .then(() => console.log(`Database connected`))
  .catch(err => console.log(`Database connection error: ${err.message}`));

module.exports.User = require('./user');
module.exports.Message = require('./message');
