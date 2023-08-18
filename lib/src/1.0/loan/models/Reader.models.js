/**
 * Define Reader database model.
 * @module lib/src/1.0/loan/models/Reader.models
 * @see module:lib/src/1.0/loan/models/Loan.models
 * @see module:lib/database/sequelize
 */

/**
 * Module dependencies.
 * @private
 */

import { Model, DataTypes } from 'sequelize';
import Loan from './Loan.models.js';

import sequelize from '../../../../database/sequelize.js';

export default class Reader extends Model {}

Reader.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'Reader' },
);

Reader.hasMany(Loan, {
  foreignKey: {
    allowNull: false,
  },
});

Loan.belongsToMany(Reader);
