const structJson = require("structjson")
const dialogFow = require("dialogflow")
const confKeys = require("../config/keys")

const sessionClient = new dialogFow.SessionsClient()
const sessionPath = sessionClient.sessionPath(confKeys.googleProjectID, confKeys.dialogFlowSessionID)


async function textQuery(text, parameters = {}) {

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text,
        languageCode: confKeys.dialogFlowSessionLanguageCode
      }
    },
    queryParams: {
      payload: {
        data: parameters
      }
    }
  }

  let responses = await sessionClient.detectIntent(request)
  responses = await handleResponses(responses)
  return responses

}

async function eventQuery(event, parameters = {}) {

  const request = {
    session: sessionPath,
    queryInput: {
      event: {
        name: event,
        parameters: structJson.jsonToStructProto(parameters),
        languageCode: confKeys.dialogFlowSessionLanguageCode
      }
    },

  }

  let responses = await sessionClient.detectIntent(request)
  responses = await handleResponses(responses)
  return responses
}

async function handleResponses(responses) {
  console.log(responses)
  return responses
}

module.exports = { eventQuery, textQuery }