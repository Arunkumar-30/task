// Optional Sequelize model if you want to persist users later
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    companyName: DataTypes.STRING
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;
