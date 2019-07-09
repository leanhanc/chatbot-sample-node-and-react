const express = require("express")
const app = express()

const PORT = process.env.PORT || 6727

app.get("/", (req, res) => {
  console.log("test")
})

app.listen(PORT);