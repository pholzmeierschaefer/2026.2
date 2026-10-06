const pgp = require("pg-promise")();

// Uma única instância de conexão para toda a aplicação (DRY)
const db = pgp("postgres://postgres:postgres@localhost:5432/bancoDEVWEB");

module.exports = db;
