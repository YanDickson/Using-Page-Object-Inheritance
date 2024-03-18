import { PageSkeleton } from "./page_skeleton";

class RedirectPage extends PageSkeleton {
  constructor(pagePath, pageHeadingText) {
    super(pagePath, pageHeadingText);
  };

  get redirectLink() {
    return cy.get('#redirect');
  };
};

export const redirectPage = new RedirectPage('redirector', 'Redirection');
