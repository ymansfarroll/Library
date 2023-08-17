/**
 * Define Loan database model.
 * @module lib/src/1.0/loan/models/Loan.models
 */

/**
 * Module dependencies.
 * @private
 */

import { Model, DataTypes } from 'sequelize';

import sequelize from '../../../../database/sequelize';

export default class Loan extends Model {}

Loan.init(
  {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'Loan' },
);
