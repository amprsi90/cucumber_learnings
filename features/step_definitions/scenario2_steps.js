const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;

Given('I am on Telegraph home page', function () {
	return this.driver.getTitle()
		.then(title => expect(title, 'main story text not displayed').to.include('Telegraph India'));
});


When('I click on hamburger menu', function () {
	return this.waitForElement({xpath: '//li[@id="menuOpen"]'})
		.then((el) => el.click());
});


Then('I should see 13 sub menu listed', function () {
	return this.waitForElement({xpath: '//div[contains(@class, "scrollbar-inner open")]'})
		.then((el) => el.findElements({css: '.menuAnchor'}))
		.then((elements) => expect(elements.length, 'sub menu count is not correct').to.be.equal(13));
});