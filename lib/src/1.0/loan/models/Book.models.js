/**
 * Define Book database model.
 * @module lib/src/1.0/loan/models/Book.models
 */

/**
 * Module dependencies.
 * @private
 */

import { DataTypes, Model } from 'sequelize';

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
