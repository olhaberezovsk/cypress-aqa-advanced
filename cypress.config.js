const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000
  },
});
