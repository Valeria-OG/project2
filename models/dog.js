module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Dog;
};
