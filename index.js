const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 6727

app.use(bodyParser.json())

app.get("/", (req, res) => {
  console.log("test")
})

app.listen(PORT);