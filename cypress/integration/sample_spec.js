describe('First attempt of testing', () => {
  beforeEach(() => {
    cy.visit('https://secure-password-generator-react.netlify.app/');
  });
  it('Learning Cypress', () => {
    cy.get('h1').should('have.text', 'Secure Password Generator');
    cy.get('.securePasswordForm div').should('have.length', 4);
    cy.get('.securePasswordForm>div').its('length').should('be.gt', 2);
    cy.get('input').first().type('5');
    cy.get('input').last().type('0');
    cy.get('button').click();
    cy.get('h2').contains('Secure Password');
    cy.get('ul li').its('length').should('be.gt', 9);
  });
});
