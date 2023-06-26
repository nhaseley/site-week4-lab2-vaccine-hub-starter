const { Client} = require("pg")
const {getdatabaseUri} = require(".config")
const db = new Client({connectionString: getDatabaseUri()})

db.connect((err) => {
    if (err) {
        console.error("connection error", err.stack)
    } else {
        console.log("Successfully connected to postgres db!")
    }
})
module.exports = db