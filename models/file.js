const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const File = sequelize.define('File', {
  name: DataTypes.STRING,
  extension: DataTypes.STRING,
  mimeType: DataTypes.STRING,
  size: DataTypes.INTEGER,
  uploadDate: DataTypes.DATE,
});

module.exports = File;
