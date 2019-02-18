module.exports = {
    tags: ['cnn'],
'Go to cnn': function (browser) {
    browser
      .url('https://www.cnn.com/')
      .waitForElementVisible('body', 1000)
      browser.execute('scrollTo(0,5000)')
      browser.saveScreenshot('./screenshots/cnn.jpg');
  },
  'Browser quit': function (browser) {
    browser
      .end();
  }
};