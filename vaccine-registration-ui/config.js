const dotenv = require("dotenv");

dotenv.config(); 
const PORT = process.env.PORT ? Number(process.env.port) : 3011

function getDatabaseUri(){
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_USER ? encodeURI(process.env.DATABASE_PASS): "postgres"
    const dbHost = process.env.DATABASE_USER || "localhost"
    const dbPort = process.env.DATABASE_USER || 5432
    const dbName = process.env.DATABASE_USER || "vaccine_hub"

    // if the DATABASE_URL envuronment variable, use that,
    // otherwise create the db connection string outselves
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}
console.log("Vaccine Hub Registration Config: ")
console.log("PORT: ", PORT)
console.log("Database URI: ", getDatabaseUri())
console.log("----")

module.exports = {
    PORT,
    getDatabaseUri
}