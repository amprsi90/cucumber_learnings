const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;
let mainStoryTitle = ''

Given('Start from Telegraph home page', function () {
	return this.driver.getTitle()
		.then(title => expect(title, 'main story text not displayed').to.include('Telegraph India'));
});


Given('I see main story tile', function () {
	return this.driver.findElement({css: '.mainStory h3 a'})
		.then((el) => el.getText())
		.then((text) => {
			expect(text, 'main story text not displayed').to.not.be.empty;
			mainStoryTitle = text;
		});
});


When('I click on main story tile', function () {
	return this.driver.findElement({css: '.mainStory h3 a'})
		.then((el) => el.click());
});


Then('I should see main story page', function () {
	return this.waitForElement({css: '.mainStory-normal h1'})
		.then((el) => el.getText())
		.then((text) => expect(text, 'correct main story page not loaded').to.equal(mainStoryTitle));
});