const express = require(`express`)
const app = express()
const path = require("path");
const router = require(`./routes/notes.routes`)
require(`dotenv`).config()
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs")
app.use(`/`, router)


module.exports = app