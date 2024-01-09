describe('usage/logging', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/logging',);
    cy.url().should('eq', 'http://localhost:8080/usage/logging',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/logging',);
    cy.title().should('eq', 'Logging | Usage | @idrinth/api-bench',);
  },);
  it('h1 matches', () => {
    cy.visit('http://localhost:8080/usage/logging',);
    cy.get('h1',)
      .invoke('text',)
      .should('eq', 'Logging',);
  },);
},);
