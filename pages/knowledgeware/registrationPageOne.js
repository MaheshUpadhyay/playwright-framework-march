/*
I am implementing page object model in Playwright framework. I have created a class for the first registration page of the knowledgeware application. I have added locators and methods to interact with the elements on the page. I have also created a test file to test the functionality of the registration page. I have used the WebButton class to click on the login button after filling out the registration form. I have added wait times to ensure that the elements are loaded before interacting with them.
I am maintaining all my Page Objects under this class

*/
const WebButton = require('../../core-engine/webbutton.js');
const WebTextBox = require('../../core-engine/webtextbox.js');

class RegistrationPageOne {
    constructor(page) {
        this.page = page;   
        this.userInput = page.locator('input[name="name"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.confirmPasswordInput = page.locator('input[name="confirmpassword"]');
        this.loginButton = page.locator('text=LOGIN');
    }

    async fillRegistrationForm(name, password, confirmPassword) {
        await new WebTextBox(this.page, this.userInput).type(name);
        await new WebTextBox(this.page, this.passwordInput).type(password);
        await new WebTextBox(this.page, this.confirmPasswordInput).type(confirmPassword);
    }

    async clickLoginButton() {
        await new WebButton(this.page, this.loginButton).click();
    }

}

module.exports = RegistrationPageOne;