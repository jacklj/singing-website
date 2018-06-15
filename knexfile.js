console.log(process.env);
console.log(process.env.DATABASE_URL);

module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/website'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
    },
    ssl: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
};
