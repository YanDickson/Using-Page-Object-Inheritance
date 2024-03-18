import { statusCodesPage } from "../page_objects/status_codes_page";

const statusCodeList = [200, 301, 404, 500];

describe('the internet spec', () => {
  statusCodeList.forEach(statusCode => {
    it(`redirects to the ${statusCode} Status Code page`, () => {
      cy.visit(statusCodesPage.pagePath);
      statusCodesPage.verifyHeaderText();
      statusCodesPage.clickStatusCode(statusCode);
      statusCodesPage.verifyIndividualStatusCodeText(statusCode)
    })
  });
});
