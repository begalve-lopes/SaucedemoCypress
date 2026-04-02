const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    chromeWebSecurity:false,
    viewportHeight:1080,
    viewportWidth:1920,
    baseUrl:"https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
