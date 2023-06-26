
const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan")
const { BadRequestError} = require("./utils/error");
const { NotFoundError } = require("../../site-week3-lab1-gift-giver-starter/utils/errors");
const PORT = 3010;
app.use(express.json())


app.use(morgan("tiny"))
app.use((req, res, next) =>{
    return next(new NotFoundError)
})

app.use((err, req, res, next) =>{
    const status = err.status || 500
    const message = err.message
    return res.status(status).json({
        error: {message, status}
    })
})

app.get("/", (req, res) => {
    res.send("<h1> Barebones server </h1>")
})




app.listen(PORT, () => {
    console.log(`Server running on https://losthost:${PORT}`)
})