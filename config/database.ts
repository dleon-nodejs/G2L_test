require("dotenv/config")

module.exports = {
  dialect: "postgres",
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  logging: false,
  define: {
    timestamps: true,
    freezeTableName: true
  }
}
