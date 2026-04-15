/*
All common methods for web checkbox element are defined under this class
Ex. check, uncheck, isChecked, etc.
All common methods ex visible, enabaled, getText, getAttribute, waitForElement, 
waitForElementToBeClickable, waitForElementToBeVisible, waitForElementToBeInvisible, waitForElementToBeEnabled, waitForElementToBeDisabled, etc. are defined under webelement-common.js classes
We can utilize those runtime under webcheckbox for check, uncheck, isChecked, etc.
*/  

const WebElementCommon = require('./webelement-common');

class WebCheckBox extends WebElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async check() {
        await this.waitForElementToBeVisible();
        await this.page.check(this.locator);
    }   

    async uncheck() {
        await this.waitForElementToBeVisible();
        await this.page.uncheck(this.locator);
    }

    async isChecked() {
        await this.waitForElementToBeVisible();
        return await this.page.isChecked(this.locator);
    }
}

module.exports = WebCheckBox;