import { redirectPage } from "../page_objects/redirect_page";
import { statusCodesPage } from "../page_objects/status_codes_page";

describe('the internet spec', () => {
  it('redirects from the Redirection page', () => {
    cy.visit(redirectPage.pagePath);
    redirectPage.verifyHeaderText();
    redirectPage.redirectLink.click()
    statusCodesPage.verifyHeaderText()
  })
})