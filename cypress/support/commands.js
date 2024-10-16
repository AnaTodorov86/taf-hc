Cypress.Commands.add('selectFromOptions', (elSelector, option) => {
    cy.get(elSelector).should('be.visible').select(option);
  });

Cypress.Commands.add('declineAllCookies', () => {
  cy.get('#CybotCookiebotDialogBodyButtonDecline', { timeout: 10000 })
    .should('be.visible')
    .click();
});

Cypress.Commands.add('clickOnElementIfVisible', (elSelector) => {
  cy.get(elSelector).then(($el) => {
    if ($el.is(':visible')) {
      cy.wrap($el).click();
    }
    else {
      cy.log(`${elSelector} is not visible`)
    }
  });
});