module.exports = app => {

  const express = require("express")

  // ROUTES
  app.get("/api/df_text_query", (req, res) => {
    console.log("test")
  })

  app.get("/api/df_event_query", (req, res) => {
    console.log("test")
  })

}