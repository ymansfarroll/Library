/**
 * Define Reader database model.
 * @module lib/src/1.0/loan/models/Reader.models
 */

/**
 * Module dependencies.
 * @private
 */

import { Model, DataTypes } from 'sequelize';

import sequelize from '../../../../database/sequelize';

export class Reader extends Model {}

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
