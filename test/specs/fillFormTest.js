const assert = require('assert');
 
describe('ultimateqa.com page', () => {
	it('Check for the successful message', () => {
		//Load url
		browser.url('https://www.ultimateqa.com/filling-out-forms/');
        browser.pause('2000');
		//Verify Page Title
        const title = browser.getTitle();
        assert.strictEqual(title, 'Filling Out Forms - Ultimate QA');
		browser.pause('2000');
		//Enter Name
		$('//*[@id="et_pb_contact_name_0"]').addValue('Fredrick');
		//Enter Message
		$('//*[@id="et_pb_contact_message_0"]').addValue('Test UI Automation');
		//Click Submit button
		$('/html/body/div[1]/div/div/article/div/div[1]/div/div/div/div[1]/div/div[2]/form/div/button').click(); 
		browser.pause('2000');
		//Verify success text
		const pass = $("//*[@id='et_pb_contact_form_0']/div/p").getText();
		console.log(pass);
		assert.equal(pass, 'Form filled out successfully');
		browser.pause('2000');
	});
});