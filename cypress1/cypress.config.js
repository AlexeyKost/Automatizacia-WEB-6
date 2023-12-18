const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "j9j9hh",
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1366,
  viewportHeight: 768,
  screenshotsFolder: "cypress/screenshots",

  configurations: {
    desktop: {
      viewportWidth: 1366,
      viewportHeight: 768,
    },
    mobile: {
      viewportWidth: 375,
      viewportHeight: 667,
    },
  },
});