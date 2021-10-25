// repositories.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Github Vue Test', () => {
  it('Visits and loads vue github', () => {
    cy.visit('http://localhost:8080');

    cy.contains('ivangbailey');
    cy.get('#repos li')
      .first()
      .click();

    cy.contains('Description')
    cy.contains('Latest update:')

  });
})