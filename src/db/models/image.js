/** @format */

// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Image = sequelize.define(
  "Image",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image_url: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "image", // The name of the table in your database
    timestamps: false, // Disable Sequelize's automatic timestamp fields
  }
);

module.exports = Image;
