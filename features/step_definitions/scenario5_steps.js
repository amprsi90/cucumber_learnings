const {Given, Then} = require('cucumber');
const requestApis = require('../../lib/requestApis');
const expect = require('chai').expect;
let current_date = ''

Given('On Telegraph home page', function () {
	return this.driver.getTitle()
		.then(title => expect(title, 'main story text not displayed').to.include('Telegraph India'));
});


Given('I see date', function () {
	return requestApis.fetchDate()
		.then(dt => current_date = dt);
});


Then('I should see today\'s full date on the header', function () {
	return this.waitForElement({css: '.date-str'})
		.then((el) => el.getText())
		.then((text) => expect(text, 'date displayed on header isn\'t correct').to.equal(current_date));
});