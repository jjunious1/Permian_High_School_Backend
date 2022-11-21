require('dotenv').config()
module.exports = {
  development: {
    database: 'permianhigh_development',
    dialect: 'postgres'
  },
  test: {
    database: 'permianhigh_database_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
