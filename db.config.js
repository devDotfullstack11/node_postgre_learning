module.exports = {
  HOST: "localhost",
  USER: "me",
  PASSWORD: "root@1234",
  DB: "api",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};