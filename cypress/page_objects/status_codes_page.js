const { PageSkeleton } = require("./page_skeleton");

class StatusCodesPage extends PageSkeleton {
  constructor(pagePath, pageHeadingText) {
    super(pagePath, pageHeadingText);
  };

  clickStatusCode(statusCode) {
    const locator = `[href="${this.pagePath}/${statusCode}"]`
    cy.get(locator).click()
  }

  verifyIndividualStatusCodeText(statusCode) {
    cy.get('p').should('contain.text', `This page returned a ${statusCode} status code.`)
  }
};

export const statusCodesPage = new StatusCodesPage('status_codes', 'Status Codes');
