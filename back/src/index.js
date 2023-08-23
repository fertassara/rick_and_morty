const express = require('express');
const server = express();
const router = require('./Routes/index');
const morgan = require('morgan');

const { sequelize } = require('./DB_connection'); // Importa la instancia sequelize, no conn

const app = express();
const PORT = 3001;

// Sincroniza sequelize con la base de datos antes de levantar el servidor
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


server.use(morgan('dev'));
server.use(express.json());


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use("/rickandmorty", router )


server.listen(3001, ()=> console.log('Listening on port 3001!'))




