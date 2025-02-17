const { defineConfig } = require("cypress");
const qautoConfig = require('./qauto.config.js');
const qauto2Config = require('./qauto2.config.js');

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportFilename: "test-report"
  },

  e2e: {

    setupNodeEvents(on, config) {
      config.env = {
        qautoEmail: 'test-qauto@mailinator.com',
        qautoPassword: 'Test12345',
        qauto2Email: 'test-qauto2@mailinator.com',
        qauto2Password: 'Test12345'
      };
      return config;
    },

    baseUrl: qautoConfig.baseUrl,
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },
});
