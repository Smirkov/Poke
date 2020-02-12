'use strict';

const Berries = (sequelize, DataTypes) => {
    return sequelize.define('Berries', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: { notEmpty: { msg: '-> Missing name berrie' } },
            allowNull: false
        }
    });
};

module.exports = Berries;
