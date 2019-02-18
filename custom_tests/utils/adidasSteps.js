module.exports = function (browser) {
    this.openBrowser = function () {
      browser
        .url('https://www.adidas.co/')
        .waitForElementVisible('body', 1000);
      return browser;
    };

    this.userLogin = function () {
        browser
        .click('#app > div > div:nth-child(1) > div.header___3wNCY.gl-is-sticky.sticky___1rlqQ > div > div:nth-child(1) > div > div > a')
        .waitForElementVisible('body', 5000);
      };
        
    this.closeBrowser = function(){
        browser
        .pause(3000)
        .end();
    };4
    return this;
};
