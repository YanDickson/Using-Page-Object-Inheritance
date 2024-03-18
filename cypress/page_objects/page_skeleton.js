export class PageSkeleton {
  constructor(pagePath, pageHeadingText) {
    this._pagePath = pagePath;
    this._pageHeadingText = pageHeadingText;
  };

  get pagePath() {
    return this._pagePath;
  };

  get pageHeadingText() {
    return this._pageHeadingText;
  };

  get mainHeader() {
    return cy.get('h3');
  };

  verifyHeaderText() {
    this.mainHeader.should('have.text', this.pageHeadingText);
  };
};
