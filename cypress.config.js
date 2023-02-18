const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
    baseUrl : 'https://www.saucedemo.com',
    specPattern : "cypress/supports/e2e/e2eKasiraja.js",
    supportFile : false,
    },

})