const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 6727

// MOUNT ROUTES
require("./routes/dialogFlowRoutes")(app)

// MIDDLEWARE
app.use(bodyParser.json())

// START APP
app.listen(PORT);