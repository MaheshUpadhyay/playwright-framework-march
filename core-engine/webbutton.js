/*
This class hold all common methods for web button element
Ex. click, double click, right click, mouse hover, drag and drop, etc.
All common methods ex visible, enabaled, getText, getAttribute, waitForElement, 
waitForElementToBeClickable, waitForElementToBeVisible, 
waitForElementToBeInvisible, waitForElementToBeEnabled, 
waitForElementToBeDisabled, etc. are defined under webelement-common.js classes
We can utilize those runtime under webbutton for click, double click, right click, mouse hover, drag and drop, etc.
*/

const WebElementCommon = require('./webelement-common');

class WebButton extends WebElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async click() {
        await this.waitForElementToBeClickable();
        await this.locator.click(); 
    }

    async doubleClick() {
        await this.waitForElementToBeClickable();
        await this.locator.dblclick();
    }

    async rightClick() {
        await this.waitForElementToBeClickable();
        await this.locator.click({ button: 'right' });
    }

    async mouseHover() {
        await this.waitForElementToBeVisible();
        await this.locator.hover();
    }
}

module.exports = WebButton;