const env = {
    database: 'db',
    username: 'roman',
    password: '!Password',
    host: 'mytodoserver.mysql.database.azure.com',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;
