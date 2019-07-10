const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 6727

// MIDDLEWARE
app.use(bodyParser.json())

// MOUNT ROUTES
require("./routes/dialogFlowRoutes")(app)



// START APP
app.listen(PORT)