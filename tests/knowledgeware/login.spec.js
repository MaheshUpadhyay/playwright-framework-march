/*
I am holding the page object for the first registration page of the knowledgeware application. I have created a class called RegistrationPageOne which contains locators for the elements on the page and methods to interact with those elements. I have used the WebButton and WebTextBox classes to perform actions on the elements. I have also added wait times to ensure that the elements are loaded before interacting with them. This class will be used in my test file to test the functionality of the registration page.

I am checking as a preeti functionality for conflict
*/

const { test, expect } = require('@playwright/test');
const RegistrationPageOne = require('../../pages/knowledgeware/registrationPageOne.js');
const config = require('../../data-source/knowledgeware/QA.config.json');

test('Test registration page functionality for conflict', async ({ page }) => {

    // Navigate to the URL
    await page.goto(config.registrationPageOne.url, {    
        waitUntil: 'domcontentloaded'
    });
    // Create an instance of RegistrationPageOne
    const registrationPage = new RegistrationPageOne(page);
    // Fill the registration form, access data from QA.config.json file
    await registrationPage.fillRegistrationForm(config.registrationPageOne.username, 
        config.registrationPageOne.password, config.registrationPageOne.confirmPassword);
    // Click the login button
    await registrationPage.clickLoginButton();
});

test('Test registration page functionality', async ({ page }) => {

    // Navigate to the URL
    await page.goto(config.registrationPageOne.url, {    
        waitUntil: 'domcontentloaded'
    });
    // Create an instance of RegistrationPageOne
    const registrationPage = new RegistrationPageOne(page);
    // Fill the registration form, access data from QA.config.json file
    await registrationPage.fillRegistrationForm(config.registrationPageOne.username, 
        config.registrationPageOne.password, config.registrationPageOne.confirmPassword);
    // Click the login button
    await registrationPage.clickLoginButton();
});

/*
Task 1 - Add all Web Elements with it's implementation
Task 2 - Add all the methods to interact with the Web Elements
Task 3 - Create New Project under Data0source, pages, tests
Task 4 - Automate all flows and scenarios related to banking application
*/
/*
Github integration with our repository
Pre-requistes:
*/