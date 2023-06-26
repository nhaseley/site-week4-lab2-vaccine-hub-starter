const pool = require("../database");
const {UnauthorizedError }= require("../utils/errors")
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
    }


}
module.exports = User
