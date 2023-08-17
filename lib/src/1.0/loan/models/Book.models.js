/**
 * Define Book database model.
 * @module lib/src/1.0/loan/models/Book.models
 * @see module:lib/src/1.0/loan/models/Loan.models
 * @see module:lib/database/sequelize
 */

/**
 * Module dependencies.
 * @private
 */

import { DataTypes, Model } from 'sequelize';
import Loan from './Loan.models.js';

import sequelize from '../../../../database/sequelize.js';

export default class Book extends Model {}

Book.init(
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
    isbn: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    borrowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
  },
);

Book.hasOne(Loan, {
  foreignKey: {
    allowNull: false,
  },
});

Loan.belongsTo(Book);
