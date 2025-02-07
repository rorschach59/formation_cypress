const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m6cbq7",
  e2e: {
    baseUrl: 'https://practice.expandtesting.com/notes/app',
    setupNodeEvents(on, config) {
    
    },
  },
});
