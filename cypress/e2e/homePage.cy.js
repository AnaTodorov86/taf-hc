import HomePage from '../pages/HomePage';
import { HOMEPAGE_TITLE } from '../fixtures/constants';

describe('Home Page Tests', () => {
  const homePage = new HomePage();

  it('Should display proper title', () => {
    homePage.visit();
    cy.declineAllCookies();
    homePage.getHeaderTitle().should('contain.text', HOMEPAGE_TITLE);
  });
});
