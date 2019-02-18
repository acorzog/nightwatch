var utils = require('../../custon_tests/utils/adidasSteps');

module.exports = {
    '@tags': ['login'],
    before: function (browser) {
      utils(browser).openBrowser();
    },
    'Go to login page': function (browser) {
        utils(browser).userLogin();
    },
  after: function (browser) {
    browser.pause(3000);
    browser.end();
  }
};