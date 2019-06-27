module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    underscored: true,
    paranoid: true,
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
