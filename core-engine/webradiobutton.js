/*
all common functions related to web radio button element are defined under this class
Ex. select, isSelected, etc.
All common methods ex visible, enabaled, getText, getAttribute, waitForElement, 
waitForElementToBeClickable, waitForElementToBeVisible, waitForElementToBeInvisible, waitForElementToBeEnabled, waitForElementToBeDisabled, etc. are defined under webelement-common.js classes
We can utilize those runtime under webradiobutton for select, isSelected, etc.
*/

const WebElementCommon = require('./webelement-common');

class WebRadioButton extends WebElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async select() {
        await this.waitForElementToBeVisible();
        await this.page.check(this.locator);
    }

    async isSelected() {
        await this.waitForElementToBeVisible();
        return await this.page.isChecked(this.locator);
    }

}

module.exports = WebRadioButton;