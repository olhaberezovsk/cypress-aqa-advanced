const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space",
    env: {
      qauto2Email: "test-qauto2@mailinator.com",
      qauto2Password: "Test12345"
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    video: false
  }
});
