const path = require('path');
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 6727

// MIDDLEWARE
app.use(bodyParser.json())

// MOUNT ROUTES
require("./routes/dialogFlowRoutes")(app)

// MOUNT FRONT-END
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// START APP
app.listen(PORT)