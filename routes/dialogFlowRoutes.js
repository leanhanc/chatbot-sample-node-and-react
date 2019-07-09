const dialogFow = require("dialogflow")
const confKeys = require("../config/keys")

const sessionClient = new dialogFow.SessionsClient()
const sessionPath = sessionClient.sessionPath(confKeys.googleProjectID, confKeys.dialogFlowSessionID)

module.exports = app => {

  // ROUTES
  app.post("/api/df_text_query", async (req, res) => {

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: req.body.text,
          languageCode: confKeys.dialogFlowSessionLanguageCode
        }
      }
    }

    try {
      // Send request and log result
      const responses = await sessionClient.detectIntent(request);
      console.log('Detected intent');

      const result = responses[0].queryResult;

      console.log(`  Query: ${result.queryText}`);
      console.log(`  Response: ${result.fulfillmentText}`);

      if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
        res.status(200).json({ response: responses[0].queryResult })
      } else {
        console.log(`  No intent matched.`);
      }
    } catch (e) {
      console.log(e)
    }

  })


  app.get("/api/df_event_query", (req, res) => {
    console.log("test")
  })

}