// const pool = require("../database");
const {BadRequestError, UnauthorizedError }= require("../utils/errors")
const db = require("../db")

class User{
    
    static async login(credentials){
        // user should submit their email and password
        // if any of these fields are missing, throw an error

        // lookup the user in the db by email
        // if a user is found, compare the submitted password with 
        // the password in the db

        // if there is a match, return the user

        // if this goes wrong, throw an erro
        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials){
        // user shoudl submit their email and password
        // if any of these fields are missing, throw an error

        // make sure no user already exists in the system with that email
        // if one does, throw an error

        // take the user's password and hash it
        // take the user's email and lowercase it

        // create a new user in the db with all their info
        // return the user
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        if (credentials.email.indexOf("@") <= 0){
            throw new BadRequestError("Invalid email.")
        }
        
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser){
            throw new BadRequestError[`Dupplicate email: ${credentials.email}`]
        }
        
        const lowercaseEmail = credentials.email.toLowerCase()
        const result = await db.query(`
            INSERT INTO users (
                email,
                password
            )
            VALUES ($1, $2)
            RETURNING id, email;
        `, [lowercasedEmail, credentials.password])
        const user = result.rows[0]
        return user

    }

static async fetchUserByEmail(email){
    if (!email){
        throw new BadRequestError("No email provided")
    }
    const query = `SELECT * FROM users WHERE email = $1`
    const result = await db.query(query, [email.toLowerCase()])
    const user = result.rows[0]
    return user
}
}
module.exports = User
