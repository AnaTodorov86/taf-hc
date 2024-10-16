const SELECTORS = {
  buttonLocationJob: 'button.c-tag',
  careerCard: '.c-careercard',
  careerCardTitle: '.c-careercard__†itle',
  moreButton: 'span.c-btn.load-more.paged',
  careerCards: 'div.c-careercard'
};

class CareersPage {
  selectCategoryOrLocation(categoryOrLocation) {
    return cy.get(SELECTORS.buttonLocationJob)
      .contains(categoryOrLocation)
      .should('be.visible')
      .click();
  }

  getCareerCard() {
    return cy.get(SELECTORS.careerCard);
  }

  getTeamNameForSelectedPosition(positionTitle) {
    return this.getCareerCard()
    .contains(positionTitle)
    .siblings('p.c-txt--body-lg')
    .find('span')
    .invoke('text');
  }

  savePositionsToFile(fileName) {
    const filePath = `cypress/results/${fileName}`;
    cy.get(SELECTORS.careerCardTitle)
      .then(($elements) => {
        if ($elements.length === 0) {
          cy.log('No positions found');
          return;
        }

        const positions = [];
        $elements.each((index, el) => {
          positions.push(el.innerText.trim());
        });
        return positions;
      })
      .then((positions) => {
        if (positions && positions.length > 0) {
          cy.writeFile(filePath, positions.join('\n'));
        }
      });
  }

  clickShowMoreIfVisible() {
    cy.get(SELECTORS.careerCards).then(($cards) => {
    const initialJobCount = $cards.length;

    cy.clickOnElementIfVisible(SELECTORS.moreButton);
    
    cy.get(SELECTORS.careerCards)
      .should('have.length.greaterThan', initialJobCount);
  });
  }
}

export default CareersPage;
