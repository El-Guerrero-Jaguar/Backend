const pgPromise = require("pg-promise");

require("pg-promise");
const pgp = pgPromise({});
const { config }  = require("../config");

const connectionData = {
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
};

const db = pgp(connectionData);
exports.db = db;