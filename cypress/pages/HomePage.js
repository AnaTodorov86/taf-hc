class HomePage {
    visit() {
      cy.visit('/');
    }
  
    getHeaderTitle() {
      return cy.get('h1');
    }
  
    navigateToCareers() {
        cy.contains('a', 'Career').realHover();
        cy.contains('a', 'Open positions').should('be.visible').click();
    }
  }
  
  export default HomePage;