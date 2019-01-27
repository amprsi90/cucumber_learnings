let {setWorldConstructor} = require('cucumber');
let {setDefaultTimeout} = require('cucumber');
let seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('firefox')
    .build();
	
  this.waitForElement = function(locator) {
    const condition = seleniumWebdriver.until.elementLocated(locator);
    return this.driver.wait(condition)
		.then(() => this.driver.findElement(locator))
  }
}

setWorldConstructor(CustomWorld)
setDefaultTimeout(120*1000)