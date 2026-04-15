/*
All common methods for web text box element are defined under this class
Ex. type, clear, get value, etc.
All common methods ex visible, enabaled, getText, getAttribute, waitForElement, 
waitForElementToBeClickable, waitForElementToBeVisible, waitForElementToBeInvisible, waitForElementToBeEnabled, waitForElementToBeDisabled, etc. are defined under webelement-common.js classes
We can utilize those runtime under webtextbox for type, clear, get value, etc.
*/

const WebElementCommon = require('./webelement-common');

class WebTextBox extends WebElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async type(text) {
        await this.waitForElementToBeVisible();
        await this.locator.fill(text);
    }

    async clear() {
        await this.waitForElementToBeVisible();
        await this.locator.fill('');
    }

    async getValue() {
        await this.waitForElementToBeVisible();
        return await this.locator.inputValue();
    }   

}

module.exports = WebTextBox;