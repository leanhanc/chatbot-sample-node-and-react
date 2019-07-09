const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 6727

// MIDDLEWARE
app.use(bodyParser.json())

// ROUTES
app.get("/api/df_text_query", (req, res) => {
  console.log("test")
})

app.get("/api/df_event_query", (req, res) => {
  console.log("test")
})

app.listen(PORT);