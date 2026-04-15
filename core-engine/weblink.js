/*
all common functions related to weblink element are defined under this class
Ex. click, get href, etc.
All common methods ex visible, enabaled, getText, getAttribute, waitForElement, 
waitForElementToBeClickable, waitForElementToBeVisible, waitForElementToBeInvisible, waitForElementToBeEnabled, waitForElementToBeDisabled, etc. are defined under webelement-common.js classes
We can utilize those runtime under weblink for click, get href, etc.
*/

const WebElementCommon = require('./webelement-common');

class WebLink extends WebElementCommon {
    constructor(page, locator) {
        super(page, locator);
    }

    async click() {
        await this.waitForElementToBeClickable();
        await this.page.click(this.locator);
    }   

    async getHref() {
        await this.waitForElementToBeVisible();
        return await this.page.getAttribute(this.locator, 'href');
    }   

}

module.exports = WebLink;