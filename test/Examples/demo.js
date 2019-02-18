module.exports = {
    tags:['Demo'],
    'Demo test Google' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', ['huge inc', browser.Keys.ENTER])
        .pause(2000)
        .assert.containsText('#rso > div:nth-child(1) > div > div > div > div > div.r > a > h3', 'Huge Inc')
        .click('#rso > div:nth-child(1) > div > div > div > div > div.r > a > h3')
        .waitForElementVisible('body',2000)
        browser.execute('scrollTo(0,5000')
        browser.saveScreenshot('./screenshots/testCaseDemo.jpg')
        .end();
    }
  };