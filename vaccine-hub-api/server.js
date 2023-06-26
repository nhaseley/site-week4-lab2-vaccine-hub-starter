
const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan")
const { BadRequestError} = require("./utils/errors");
const { NotFoundError } = require("./utils/errors");
// const PORT = process.env.PORT || 3001;
const { PORT } = require("../vaccine-registration-ui/config")

// enables cross-origin resource sharing for all origins
app.use(cors())

// parse including request bodies with JSON payloads
app.use(express.json())

// log request info
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