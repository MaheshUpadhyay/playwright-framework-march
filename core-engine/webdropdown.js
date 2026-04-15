/*
all common functions related to web drop down element are defined under this class
Ex. selectByVisibleText, selectByValue, selectByIndex, getSelectedOption, etc.
All common methods ex visible, enabaled, getText, getAttribute, waitForElement, 
waitForElementToBeClickable, waitForElementToBeVisible, waitForElementToBeInvisible, waitForElementToBeEnabled, waitForElementToBeDisabled, etc. are defined under webelement-common.js classes
We can utilize those runtime under webdropdown for selectByVisibleText, selectByValue, selectByIndex, getSelectedOption, etc.
*/

const WebElementCommon = require('./webelement-common');
class WebDropDown extends WebElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async selectByVisibleText(text) {
        await this.waitForElementToBeVisible();
        await this.page.selectOption(this.locator, { label: text });
    }

    async selectByValue(value) {
        await this.waitForElementToBeVisible();
        await this.page.selectOption(this.locator, { value: value });
    }

    async selectByIndex(index) {
        await this.waitForElementToBeVisible();
        const options = await this.page.$$(this.locator + ' option');
        if (index < options.length) {
            const value = await options[index].getAttribute('value');
            await this.page.selectOption(this.locator, { value: value });
        } else {
            throw new Error('Index out of bounds');
        }   
    }

    async getSelectedOption() {
        await this.waitForElementToBeVisible();
        const selectedOption = await this.page.$(this.locator + ' option:checked');
        return await selectedOption.innerText();
    }   
}

module.exports = WebDropDown;