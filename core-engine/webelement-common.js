/*
this class holds all common methods for webelement to handle
Ex. visible, enabaled, getText, getAttribute, waitForElement, waitForElementToBeClickable, waitForElementToBeVisible, waitForElementToBeInvisible, waitForElementToBeEnabled, waitForElementToBeDisabled, etc.
And all other common methods are used under respective classes
Ex. WebButton, WebInput, WebLink, WebDropDown, WebCheckBox, WebRadioButton, WebTable, WebImage, WebFrame, WebAlert
Web button performs click, double click, right click, mouse hover, drag and drop, etc.
Web input performs type, clear, get value, etc.
Web link performs click, get href, etc.
Web drop down performs select by value, select by index, select by visible text, get options, etc.
*/

class WebElementCommon {
    constructor(page, locator) {
        this.page = page;
        this.locator = locator; // now it's Playwright locator
    }

    async isVisible() {
        return await this.locator.isVisible();
    }

    async isEnabled() {
        return await this.locator.isEnabled();
    }

    async getText() {
        return await this.locator.textContent();
    }

    async getAttribute(attributeName) {
        return await this.locator.getAttribute(attributeName);
    }

    async waitForElement(timeout = 5000) {
        await this.locator.waitFor({ state: 'attached', timeout });
    }

    async waitForElementToBeClickable(timeout = 5000) {
        await this.locator.waitFor({ state: 'visible', timeout });

        if (!(await this.locator.isEnabled())) {
            throw new Error('Element is not enabled');
        }
    }

    async waitForElementToBeVisible(timeout = 5000) {
        await this.locator.waitFor({ state: 'visible', timeout });
    }

    async waitForElementToBeInvisible(timeout = 5000) {
        await this.locator.waitFor({ state: 'hidden', timeout });
    }
}

module.exports = WebElementCommon;
