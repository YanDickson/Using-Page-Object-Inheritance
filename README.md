# Testing Inheritance with the Page Object Model
In this project, I use JavaScript class inheritance in the page object model. Included are tests for a few pages on the [Welcome to the-internet](https://the-internet.herokuapp.com/) website.

Code for depicting class inheritance can be seen [here](cypress/page_objects).

All tests can be found [here](cypress/e2e).

## Technologies Used
The testing framework used in this project is [Cypress.io](https://www.cypress.io/). Cypress was chosen as it is lightweight, easy to use, and is a great option for UI testing.

## Installation and Use
1. Install [node](https://nodejs.org/en/download/) locally.
2. Install dependencies with the following commend: `> npm install`.
3. Enter the following command (i.e. in Terminal.app) to run tests `> npx cypress run`.

### Test Execution via the Cypress UI
After installing the project dependencies, to execute the tests via the Cypress UI, follow these steps. 
1. Enter the follwoing command (i.e. in Terminal.app) `> npx cypress open`.
2. Click `E2E Testing` in the UI.
3. Select a browser.
4. Click `Start E2E Testing in {selected browser}`.
5. Click on the test you would like to execute.
