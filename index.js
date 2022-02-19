require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

app.use("/places", require("./controllers/places.js"))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("*", (req, res) => {
    res.status(404).render("error404")
})

app.listen(PORT)