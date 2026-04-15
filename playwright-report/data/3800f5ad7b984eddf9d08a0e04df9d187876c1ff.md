# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registrationPageOne.spec.js >> Test registration page functionality
- Location: tests\knowledgeware\registrationPageOne.spec.js:9:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('input[name="confirmPassword"]') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - heading "Selenium Automation Testing" [level=1] [ref=e2]
  - generic [ref=e5]:
    - heading "Registration Form" [level=3] [ref=e6]
    - text: "UserName :"
    - textbox [ref=e7]: Shweta
    - text: "Password :"
    - textbox [active] [ref=e8]: Preeti
    - text: "Confirm Password :"
    - textbox [ref=e9]
    - button "SUBMIT" [ref=e10]
    - link "LOGIN" [ref=e11] [cursor=pointer]:
      - /url: reg.html
```

# Test source

```ts
  1  | /*
  2  | this class holds all common methods for webelement to handle
  3  | Ex. visible, enabaled, getText, getAttribute, waitForElement, waitForElementToBeClickable, waitForElementToBeVisible, waitForElementToBeInvisible, waitForElementToBeEnabled, waitForElementToBeDisabled, etc.
  4  | And all other common methods are used under respective classes
  5  | Ex. WebButton, WebInput, WebLink, WebDropDown, WebCheckBox, WebRadioButton, WebTable, WebImage, WebFrame, WebAlert
  6  | Web button performs click, double click, right click, mouse hover, drag and drop, etc.
  7  | Web input performs type, clear, get value, etc.
  8  | Web link performs click, get href, etc.
  9  | Web drop down performs select by value, select by index, select by visible text, get options, etc.
  10 | */
  11 | 
  12 | class WebElementCommon {
  13 |     constructor(page, locator) {
  14 |         this.page = page;
  15 |         this.locator = locator; // now it's Playwright locator
  16 |     }
  17 | 
  18 |     async isVisible() {
  19 |         return await this.locator.isVisible();
  20 |     }
  21 | 
  22 |     async isEnabled() {
  23 |         return await this.locator.isEnabled();
  24 |     }
  25 | 
  26 |     async getText() {
  27 |         return await this.locator.textContent();
  28 |     }
  29 | 
  30 |     async getAttribute(attributeName) {
  31 |         return await this.locator.getAttribute(attributeName);
  32 |     }
  33 | 
  34 |     async waitForElement(timeout = 5000) {
  35 |         await this.locator.waitFor({ state: 'attached', timeout });
  36 |     }
  37 | 
  38 |     async waitForElementToBeClickable(timeout = 5000) {
  39 |         await this.locator.waitFor({ state: 'visible', timeout });
  40 | 
  41 |         if (!(await this.locator.isEnabled())) {
  42 |             throw new Error('Element is not enabled');
  43 |         }
  44 |     }
  45 | 
  46 |     async waitForElementToBeVisible(timeout = 5000) {
> 47 |         await this.locator.waitFor({ state: 'visible', timeout });
     |                            ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  48 |     }
  49 | 
  50 |     async waitForElementToBeInvisible(timeout = 5000) {
  51 |         await this.locator.waitFor({ state: 'hidden', timeout });
  52 |     }
  53 | }
  54 | 
  55 | module.exports = WebElementCommon;
  56 | 
```