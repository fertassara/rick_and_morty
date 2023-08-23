// DB_connection.js
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User'); // Asegúrate de que la ruta sea correcta
const FavoriteModel = require('./models/Favorite'); // Asegúrate de que la ruta sea correcta

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

const initializeModels = () => {
  const User = UserModel(sequelize);
  const Favorite = FavoriteModel(sequelize);

  User.belongsToMany(Favorite, { through: 'user_favorite' });
  Favorite.belongsToMany(User, { through: 'user_favorite' });

  return {
    User,
    Favorite,
  };
};

module.exports = {
  initializeModels,
  sequelize,
};
