/*
open url: https://playwright.dev/docs/introduction

and click on button using WebButton.js class which has common methods
*/

const { test, expect } = require('@playwright/test');
const WebButton = require('../../core-engine/webbutton.js');  
const WebTextBox = require('../../core-engine/webtextbox.js');

test('Click on button using WebButton class', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://www.knowledgeware.in/final.html', {
        waitUntil: 'domcontentloaded'
    });       
    //add textbox example
    await new WebTextBox(page, page.locator('input[name="name"]')).type('Shweta');
    //add textbox password example
    await new WebTextBox(page, page.locator('input[name="password"]')).type('Preeti');
    //add textbox confirm password example
    await new WebTextBox(page, page.locator('input[name="confirmpassword"]')).type('Bhawnaa');
    await page.waitForTimeout(6000);
    // Create an instance of WebButton class with the locator for the button
    await new WebButton(page, page.locator('text=LOGIN')).click();
    await page.waitForTimeout(6000);

});