const sequelize = require('../config/database');
const User = require('./user');
const File = require('./file');

module.exports = { sequelize, User, File };
