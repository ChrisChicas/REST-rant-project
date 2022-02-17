require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use("/places", require("./controllers/places"))

app.get("/", (req, res) => {
    res.send("<h1>Testing, testing!</h1>")
})

app.get("*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})

app.listen(PORT)