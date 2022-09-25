import { Sequelize } from 'sequelize';

const db = new Sequelize('TS_RestServer', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;