const config = require("../../config.json");
const chalk = require("chalk");
const fs = require("fs");

// Runs checks to see if config is valid
function checkValid() {
  const v = parseFloat(process.versions.node);

  if (v < 14) {
    throw Error(
      "[ERROR]: This bot requires version 16of nodejs! Please upgrade to version 16"
    );
  }

  if (config.token === "") {
    throw Error("[ERROR][BOT]: Bot token is required");
  }

  if (config.mongodbUri === "") {
    throw Error("[ERROR][BOT]: Many features may not work if you do not have a mongodbUri.");
  }


}

module.exports = checkValid;
