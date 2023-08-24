const server = require('./app')
const { sequelize } = require('./DB_connection');

sequelize.sync({force: true}).then(()=>{
    server.listen(3001, ()=> console.log('Listening on port 3001!'))
});





