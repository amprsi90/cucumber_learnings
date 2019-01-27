const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;

Given('I am on Telegraph home page', function () {
	return this.driver.getTitle()
		.then(title => expect(title, 'main story text not displayed').to.include('Telegraph India'));
});


When('I click on search button', function () {
	return this.driver.findElement({xpath: '//div[contains(@class, "search-btn")]'})
		.then((el) => el.click());
});


Then('I should see search box with placeholder', function () {
	return this.waitForElement({xpath: '//input[@class="headerSearch show"]'})
		.then((el) => el.getAttribute('placeholder'))
		.then((placeholdertext) => expect(placeholdertext, 'placeholder is not correct').to.equal('Search'));
});