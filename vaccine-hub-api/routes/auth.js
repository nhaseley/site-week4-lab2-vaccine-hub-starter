const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", async (req, res, next) => {
  try {
    // take the users email and password and attempting to authenticate them
    // const login = req.body;
    // res.status(201).json(login) // success status response code
  } catch (err) {
    next(err);
  }
});

router.post("/register", (req, res) => {

    try{
        // take the users email and password and create a new user in our database
    } catch(err) {
        next(err)
    }
//   const register = req.body;
//   res.status(201).json(register); // success status response code
});
module.exports = router;
