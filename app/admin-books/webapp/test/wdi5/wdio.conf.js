const path = require("path");

exports.config = {
  runner: "local",

  specs: [
    path.join(__dirname, "./specs/**/*.js")
  ],

  maxInstances: 1,

  capabilities: [{
    browserName: "chrome",
    acceptInsecureCerts: true,      // Importante per HTTPS self-signed
    "goog:chromeOptions": {
      args: ["--headless", "--disable-gpu", "--window-size=1920,1080"]
    }
  }],

  logLevel: "info",

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000
  },

  baseUrl: "http://localhost:4004",  // CAP default
  waitforTimeout: 10000,

  services: ["chromedriver"],

  reporters: ["spec"],

  // CONFIGURAZIONE WDI5
  wdi5: {
    screenshotPath: path.join(__dirname, "./screenshots"),
    appUrl: "http://localhost:4004/admin-books/webapp/index.html", // URL dell'app
    logLevel: "verbose",
    capabilities: {
      browserName: "chrome",
      acceptInsecureCerts: true
    }
  },

  before: function () {
    browser.maximizeWindow();
  }
};
