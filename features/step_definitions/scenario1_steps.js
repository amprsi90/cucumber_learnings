const {Given, Then} = require('cucumber');
const expect = require('chai').expect;

Given('I am on Telegraph home page', function () {
	return this.driver.getTitle()
		.then(title => expect(title, 'main story text not displayed').to.include('Telegraph India'));
});


Then('I should see brand logo', function () {
	return this.waitForElement({css: '.logo img'})
		.then((el) => el.getAttribute('src'))
		.then((source) => expect(source, 'brand logo mismatch').to.equal('https://www.telegraphindia.com/assets/images/logo.png?v=5'));
});


Then('I should see social media share icons', function () {
	return this.waitForElement({css: '.justify-content-end .social_share a:first-child'})
		.then((el) => el.getAttribute('href'))
		.then((source) => expect(source, 'social share icon not as expected').to.equal('https://www.facebook.com/thetelegraphindia'));
});