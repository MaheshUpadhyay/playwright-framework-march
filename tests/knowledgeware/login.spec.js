/*
I am holding the page object for the first registration page of the knowledgeware application. I have created a class called RegistrationPageOne which contains locators for the elements on the page and methods to interact with those elements. I have used the WebButton and WebTextBox classes to perform actions on the elements. I have also added wait times to ensure that the elements are loaded before interacting with them. This class will be used in my test file to test the functionality of the registration page.

Generating a conflict for test
*/

const { test, expect } = require('@playwright/test');
const RegistrationPageOne = require('../../pages/knowledgeware/registrationPageOne.js');
const config = require('../../data-source/knowledgeware/QA.config.json');

test('Test registration page functionality', async ({ page }) => {
    //Snehal is generating conflict for validation

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
