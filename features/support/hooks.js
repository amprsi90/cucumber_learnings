let {After, Before} = require('cucumber');
let seleniumWebdriver = require('selenium-webdriver');
let driver;
Before(function () {
    return this.driver.then(launchedDriver => {
			driver = launchedDriver;
			return driver.get('https://www.telegraphindia.com/')
		})
		.then (() => driver.findElement({css: '#notUser span:first-child'}))
		.then((elem) => elem.click())
		.then (() => driver.findElement({xpath: '//input[@name="email"]'}))
		.then((elem) => elem.sendKeys('amprsi90@gmail.com'))
		.then (() => driver.findElement({xpath: '//input[@name="password"]'}))
		.then((elem) => elem.sendKeys('testing@123'))
		.then (() => driver.findElement({xpath: '//input[@name="submit"]'}))
		.then((elem) => elem.click());
});

After(function () {
  let elem;
  return this.waitForElement({css: '.hasUser span:first-child'})
		.then(() => driver.findElement({css: '.hasUser span:first-child'}))
		.then((el) => elem = el)
		.then(() => driver.actions())
		.then((actions) => actions.move(elem).perform())
		.then (() => driver.findElement({xpath: '//div[@class="hasUser"]/ul/li[2]/a'}))
		.then((el) => el.click());		
});