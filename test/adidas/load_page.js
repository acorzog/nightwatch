module.exports = {
  tags: ['loag_page'],
    'Load Adidas Colombia page' : function (browser) {
      browser
        .url('https://www.adidas.co/')
        .waitForElementVisible('body', 1000)
        .assert.title('Sitio Oficial adidas | adidas Colombia')
        .assert.visible('#app > div > div:nth-child(1) > div.header___3wNCY.gl-is-sticky.sticky___1rlqQ > div > div:nth-child(1) > div > div > a')
        .click('#app > div > div:nth-child(1) > div.header___3wNCY.gl-is-sticky.sticky___1rlqQ > div > div:nth-child(1) > div > div > a')
        .waitForElementVisible('body', 1000, true)
        .setValue('input[type=text]', ['huge inc', browser.Keys.ENTER])
        .pause(2000)
        .assert.containsText('#rso > div:nth-child(1) > div > div > div > div > div.r > a > h3', 'Huge Inc')
        .click('#rso > div:nth-child(1) > div > div > div > div > div.r > a > h3')
        .waitForElementVisible('body',2000)
        .end();
    }
  };