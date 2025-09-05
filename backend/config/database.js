module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_db'),
      username: env('DATABASE_USERNAME', 'strapi_user'),
      password: env('DATABASE_PASSWORD', 'strapi_pass'),
      ssl: env.bool('DATABASE_SSL', true) && {
        key: env('DATABASE_SSL_KEY'),
        cert: env('DATABASE_SSL_CERT'),
        ca: env('DATABASE_SSL_CA'),
        capath: env('DATABASE_SSL_CAPATH'),
        cipher: env('DATABASE_SSL_CIPHER'),
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      },
    },
    debug: false,
  },
});
